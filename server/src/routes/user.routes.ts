import express from "express";
import multer from "multer";
import usersController from "../controllers/users.controller";
import { authenticate } from "../middlewares/auth.middleware";
import validators from "../middlewares/validation.middleware";
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.get("/bills", authenticate, usersController.getAllBills);
router.get("/info", usersController.getAllUserRequests);
router.get("/car", authenticate, usersController.getAllChargerRequests);
router.post(
  "/bill",
  upload.single("file"),
  validators.validateBill,
  usersController.createUserBill
);
router.post(
  "/request",
  validators.validateUser,
  usersController.createUserRequest
);

router.post("/login", usersController.login);

router.post(
  "/car",
  upload.none(),
  validators.validateCarRequest,
  usersController.createElectricCarRequest
);

router.get("/brands", usersController.getAllBrands);

router.delete("/bills/:id", authenticate, usersController.deleteBill);
router.delete(
  "/chargers/:id",
  authenticate,
  usersController.deleteChargerRequest
);

export default router;
