"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_validator_1 = require("express-validator");
const prisma = new client_1.PrismaClient();
const validateUser = [
    (0, express_validator_1.body)("data.name")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({ min: 3 })
        .withMessage("El nombre debe tener al menos 3 caracteres"),
    (0, express_validator_1.body)("data.surname")
        .notEmpty()
        .withMessage("El apellido es obligatorio")
        .isLength({ min: 3 })
        .withMessage("El apellido debe tener al menos 3 caracteres"),
    (0, express_validator_1.body)("data.email")
        .notEmpty()
        .withMessage("El correo electrónico es obligatorio")
        .isEmail()
        .withMessage("El correo electrónico debe ser válido"),
    // .normalizeEmail(),
    (0, express_validator_1.body)("data.requestType")
        .notEmpty()
        .withMessage("El tipo de solicitud es obligatorio"),
    (0, express_validator_1.body)("data.comment")
        .notEmpty()
        .withMessage("Su mensaje no puede estar vacio")
        .isLength({ min: 10 })
        .withMessage("Su mensaje debe tener al menos 10 caracteres"),
];
const validateBill = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({ min: 3 })
        .withMessage("El nombre debe tener al menos 3 caracteres"),
    (0, express_validator_1.body)("surname")
        .notEmpty()
        .withMessage("El apellido es obligatorio")
        .isLength({ min: 3 })
        .withMessage("El apellido debe tener al menos 3 caracteres"),
    (0, express_validator_1.body)("email")
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
    (0, express_validator_1.body)("paquete").notEmpty().withMessage("Tienes que seleccionar un paquete"),
    // .normalizeEmail()
];
const validateCarRequest = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({ min: 3 })
        .withMessage("El nombre debe tener al menos 3 caracteres"),
    (0, express_validator_1.body)("surname")
        .notEmpty()
        .withMessage("El apellido es obligatorio")
        .isLength({ min: 3 })
        .withMessage("El apellido debe tener al menos 3 caracteres"),
    (0, express_validator_1.body)("email")
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
    (0, express_validator_1.body)("manufacturerName")
        .notEmpty()
        .withMessage("La marca del auto es obligatorio"),
];
exports.default = { validateUser, validateBill, validateCarRequest };
