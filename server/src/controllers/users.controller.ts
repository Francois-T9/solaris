import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import nodemailer from "nodemailer";
import crypto from "crypto";
const aws_acess_key = process.env.AWS_ACCESS_KEY_ID;
const aws_secret_key = process.env.AWS_SECRET_ACCESS;
const bucket_name = process.env.BUCKET_NAME;
const bucket_region = process.env.BUCKET_REGION;
const s3 = new S3Client({ region: bucket_region });

const prisma = new PrismaClient();

const getAllBills = async (req, res) => {
  try {
    const allBills = await prisma.userBill.findMany();

    for (const bill of allBills) {
      console.log(bill.billURL);
    }

    // const getObjectParams = {
    //   BucketName: bucket_name,
    //   Key: "",
    // };

    // const command = new GetObjectCommand(getObjectParams);
    // const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

    res.status(200).json(allBills);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllUserRequests = async (req, res) => {
  try {
    const allUsers = await prisma.userContact.findMany();

    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createUserBill = async (req, res) => {
  const { email } = req.body;
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

  const params = {
    Bucket: bucket_name,
    Key: fileName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };
  const command = new PutObjectCommand(params);

  try {
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      file.originalname
    }`;
    const newUser = await prisma.userBill.upsert({
      where: {
        email,
      },
      update: {
        billURL: fileName,
      },
      create: {
        email,
        billURL: fileName,
      },
    });

    await s3.send(command);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
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
    const newUserRequest = await prisma.userContact.upsert({
      where: {
        email: data.email,
      },
      update: {
        question: data.question,
      },
      create: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        requestType: data.requestType,
        question: data.question,
      },
    });

    res.status(200).json(newUserRequest);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default {
  getAllBills,
  getAllUserRequests,
  createUserBill,
  createUserRequest,
};
