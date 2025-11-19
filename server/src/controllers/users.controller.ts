import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import nodemailer from "nodemailer";
const s3 = new S3Client({});

const prisma = new PrismaClient();

const getAllBills = async (req, res) => {
  try {
    const allUsers = await prisma.userBill.findMany();

    res.status(200).json(allUsers);
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

  try {
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      file.originalname
    }`;
    const newUser = await prisma.userBill.upsert({
      where: {
        email,
      },
      update: {
        billURL: fileUrl,
      },
      create: {
        email,
        billURL: fileUrl,
      },
    });

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
