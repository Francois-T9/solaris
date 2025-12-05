import { body } from "express-validator";
import { PrismaClient } from "../../prisma/generated/client";
const prisma = new PrismaClient();

const validateUser = [
  body("data.name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres"),

  body("data.surname")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El apellido debe tener al menos 3 caracteres"),

  body("data.email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio")
    .isEmail()
    .withMessage("El correo electrónico debe ser válido"),

  // .normalizeEmail(),

  body("data.requestType")
    .notEmpty()
    .withMessage("El tipo de solicitud es obligatorio"),

  body("data.comment")
    .notEmpty()
    .withMessage("Su mensaje no puede estar vacio")
    .isLength({ min: 10 })
    .withMessage("Su mensaje debe tener al menos 10 caracteres"),
];
const validateBill = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres"),

  body("surname")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El apellido debe tener al menos 3 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio")
    .isEmail()
    .withMessage("El correo electrónico debe ser válido")
    .custom(async (value) => {
      const existingUser = await prisma.energyRequest.findUnique({
        where: { userEmail: value },
      });
      if (existingUser) {
        throw new Error("EMAIL_EXISTS");
      }
      return true;
    }),
  body("paquete").notEmpty().withMessage("Tienes que seleccionar un paquete"),

  // .normalizeEmail()
];

const validateCarRequest = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres"),

  body("surname")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El apellido debe tener al menos 3 caracteres"),

  body("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio")
    .isEmail()
    .withMessage("El correo electrónico debe ser válido")
    .custom(async (value) => {
      const existingUser = await prisma.chargerRequest.findUnique({
        where: { userEmail: value },
      });
      if (existingUser) {
        throw new Error("EMAIL_EXISTS");
      }
      return true;
    }),

  // .normalizeEmail(),

  body("manufacturerName")
    .notEmpty()
    .withMessage("La marca del auto es obligatorio"),
];
export default { validateUser, validateBill, validateCarRequest };
