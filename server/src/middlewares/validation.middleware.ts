import { body } from "express-validator";

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
    .withMessage("El correo electrónico debe ser válido")

    .normalizeEmail(),

  body("data.requestType")
    .notEmpty()
    .withMessage("El tipo de solicitud es obligatorio"),

  body("data.question")
    .notEmpty()
    .withMessage("Su mensaje no puede estar vacio")
    .isLength({ min: 10 })
    .withMessage("Su mensaje debe tener al menos 10 caracteres"),
];
export default validateUser;
