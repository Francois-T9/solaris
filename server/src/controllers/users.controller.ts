import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";
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
  try {
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      file.originalname
    }`;
    console.log(fileUrl);
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
