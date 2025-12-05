import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import router from "./routes/user.routes";
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true, // uses 'qs' instead of 'querystring'
    parameterLimit: 10000,
  })
);
app.use("/api", router);

app.listen(3000, () => {
  console.log("app running on port 3000");
});

export default app;
