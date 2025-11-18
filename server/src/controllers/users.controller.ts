import { PrismaClient } from "@prisma/client";
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
  const { email, billURL } = req.body;
  try {
    const newUser = await prisma.userBill.upsert({
      where: {
        email,
      },
      update: {
        billURL,
      },
      create: {
        email,
        billURL,
      },
    });

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const createUserRequest = async (req, res) => {
  const { name, surname, email, requestType, question } = req.body;
  try {
    const newUserRequest = await prisma.userContact.upsert({
      where: {
        email,
      },
      update: {
        question,
      },
      create: {
        name,
        surname,
        email,
        requestType,
        question,
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
