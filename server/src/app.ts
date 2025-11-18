import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/user.routes";
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", router);
app.listen(3000, () => {
  console.log("app running on port 3000");
});
