import express from "express";
import usersController from "../controllers/users.controller";
import validators from "../middlewares/validation.middleware";
import multer from "multer";
import multerS3 from "multer-s3";

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.get("/bills", usersController.getAllBills);
router.get("/info", usersController.getAllUserRequests);
router.get("/car", usersController.getAllChargerRequests);
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

router.post(
  "/car",
  upload.none(),
  validators.validateCarRequest,
  usersController.createElectricCarRequest
);

router.get("/brands", usersController.getAllBrands);

router.delete("/bills/:id", usersController.deleteBill);
router.delete("/chargers/:id", usersController.deleteChargerRequest);

export default router;
