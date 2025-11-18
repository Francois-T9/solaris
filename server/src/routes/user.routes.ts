import express from "express";
import usersController from "../controllers/users.controller";
const router = express.Router();

router.get("/bills", usersController.getAllBills);
router.get("/questions", usersController.getAllUserRequests);
router.post("/bills", usersController.createUserBill);
router.post("/questions", usersController.createUserRequest);

export default router;
