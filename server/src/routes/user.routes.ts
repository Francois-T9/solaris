import express from "express";
import usersController from "../controllers/users.controller";
import validators from "../middlewares/validation.middleware";
import multer from "multer";
import multerS3 from "multer-s3";

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.get("/bills", usersController.getAllBills);
router.get("/questions", usersController.getAllUserRequests);
router.post(
  "/bills",
  upload.single("file"),
  validators.validateBill,
  usersController.createUserBill
);
router.post(
  "/questions",
  validators.validateUser,
  usersController.createUserRequest
);

export default router;
