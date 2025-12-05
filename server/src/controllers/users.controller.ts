import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import dotenv from "dotenv";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import transporter from "../config/nodemailer";
import { PrismaClient } from "../lib/prisma";
dotenv.config();
const aws_acess_key = process.env.AWS_ACCESS_KEY_ID;
const aws_secret_key = process.env.AWS_SECRET_ACCESS_KEY;
const bucket_name = process.env.BUCKET_NAME;
const bucket_region = process.env.BUCKET_REGION;
const s3 = new S3Client({ region: bucket_region });

export const prisma = new PrismaClient();

const login = async (req, res) => {
  const { password } = req.body;
  if (password !== process.env.ADMIN_PWD) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return res.status(200).json({ accessToken: token });
};

const getAllBills = async (req, res) => {
  try {
    const allBills = await prisma.energyRequest.findMany({
      orderBy: { createdAt: "desc" },
    });

    for (const bill of allBills) {
      const getObjectParams = {
        Bucket: bucket_name,
        Key: bill.billName,
      };

      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      bill.billUrl = url;

      await prisma.energyRequest.update({
        where: {
          id: bill.id,
        },
        data: {
          billUrl: url,
        },
      });
    }

    res.status(200).json(allBills);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
const getAllChargerRequests = async (req, res) => {
  try {
    const allChargerRequests = await prisma.chargerRequest.findMany({});

    // const userWithChargerRequest = allUsers.filter(
    //   (user) => user.
    // );
    res.status(200).json(allChargerRequests);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllBrands = async (req, res) => {
  try {
    const allBrands = await prisma.manufacturer.findMany({});

    res.status(200).json(allBrands);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUserRequests = async (req, res) => {
  try {
    const allUsers = await prisma.infoRequest.findMany();

    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createUserBill = async (req, res) => {
  const { name, surname, paquete } = req.body;
  const email = req.body["email"];
  const file = req.file;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  if (!file) {
    return res.status(400).json({ error: "Tienes que subir un archivo" });
  }

  if (file.size > 2 * 1024 * 1024) {
    return res.status(400).json({ error: "El archivo no debe exceder 2 MB" });
  }

  if (!file.originalname.toLowerCase().endsWith(".pdf")) {
    return res.status(400).json({ error: "Solo se permiten archivos PDF" });
  }

  if (file.mimetype !== "application/pdf") {
    return res.status(400).json({ error: "El tipo de archivo debe ser PDF" });
  }

  const randomFileName = (bytes = 32) =>
    crypto.randomBytes(bytes).toString("hex");

  const fileName = randomFileName();

  // upload to s3

  const params = {
    Bucket: bucket_name,
    Key: fileName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };
  const command = new PutObjectCommand(params);
  await s3.send(command);

  // download from s3
  const getObjectParams = {
    Bucket: bucket_name,
    Key: fileName,
  };

  const getCommand = new GetObjectCommand(getObjectParams);
  const url = await getSignedUrl(s3, getCommand, { expiresIn: 3600 });

  try {
    const newUser = await prisma.user.upsert({
      where: {
        email,
      },
      update: {
        energyRequest: {
          upsert: {
            update: {
              billName: fileName,
              billUrl: url,
            },
            create: {
              billName: fileName,
              billUrl: url,
              paquete,
            },
          },
        },
      },
      create: {
        name,
        surname,
        email,
        energyRequest: {
          create: {
            billName: fileName,
            billUrl: url,
            paquete,
          },
        },
      },
    });

    // send email with pdf in attachment or url in text body

    const mailOptions = {
      from: "francois.thullier98@gmail.com",
      to: email,
      subject: "Has recibido una requesta de cotizacion",
      text: `Hola, ${email} te ha mandado su recibo de luz para cotizar.`,
      attachments: [
        {
          filename: `${fileName}.pdf`,
          path: url,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
const createUserRequest = async (req, res) => {
  const { data } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  try {
    const request = await prisma.user.upsert({
      where: {
        email: data.email,
      },
      update: {
        infoRequest: {
          upsert: {
            update: {
              requestType: data.requestType,
              comment: data.comment,
            },
            create: {
              requestType: data.requestType,
              comment: data.comment,
            },
          },
        },
      },
      create: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        infoRequest: {
          create: {
            requestType: data.requestType,
            comment: data.comment,
          },
        },
      },
    });

    res.status(200).json(request);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteBill = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const bill = await prisma.energyRequest.findFirst({
      where: {
        id,
      },
    });

    if (!bill) {
      res.status(404).json({ error: "Bill not found" });
      return;
    }
    const params = {
      Bucket: bucket_name,
      Key: bill.billName,
    };
    const command = new DeleteObjectCommand(params);
    await s3.send(command);

    await prisma.energyRequest.delete({ where: { id } });

    res.status(200).json(bill);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteChargerRequest = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const request = await prisma.chargerRequest.findFirst({
      where: {
        id,
      },
    });

    if (!request) {
      res.status(404).json({ error: "Bill not found" });
      return;
    }
    await prisma.chargerRequest.delete({ where: { id } });

    res.status(200).json(request);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createElectricCarRequest = async (req, res) => {
  const { name, surname, email, manufacturerName } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  try {
    const newEVRequest = await prisma.user.upsert({
      where: {
        email,
      },
      update: {
        chargerRequest: {
          upsert: {
            update: {
              manufacturerName,
            },
            create: {
              manufacturerName,
            },
          },
        },
      },
      create: {
        name,
        surname,
        email,
        chargerRequest: {
          create: {
            manufacturerName,
          },
        },
      },
    });
    res.status(200).json(newEVRequest);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default {
  getAllBills,
  getAllUserRequests,
  createUserBill,
  createUserRequest,
  deleteBill,
  getAllBrands,
  createElectricCarRequest,
  getAllChargerRequests,
  deleteChargerRequest,
  login,
};
