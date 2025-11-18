import express from "express";
import usersController from "../controllers/users.controller";
import validateUser from "../middlewares/validation.middleware";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, file.originalname);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.get("/bills", usersController.getAllBills);
router.get("/questions", usersController.getAllUserRequests);
router.post("/bills", upload.single("file"), usersController.createUserBill);
router.post("/questions", validateUser, usersController.createUserRequest);

export default router;
