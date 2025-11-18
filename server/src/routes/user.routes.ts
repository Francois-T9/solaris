import express from "express";
import usersController from "../controllers/users.controller";
import validateUser from "../middlewares/validation.middleware";
const router = express.Router();

router.get("/bills", usersController.getAllBills);
router.get("/questions", usersController.getAllUserRequests);
router.post("/bills", usersController.createUserBill);
router.post("/questions", validateUser, usersController.createUserRequest);

export default router;
