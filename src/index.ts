import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const { PORT, HOST, DB_PASSWORD, DB_ADMIN } = process.env;
const port = parseInt(PORT as string);
const host = HOST as string;
const db_password = DB_PASSWORD as string;
const db_admin = DB_ADMIN as string;

app.get("/", (req, res) => {
  res.send("testing...");
});

mongoose
  .connect(
    `mongodb+srv://${db_admin}:${db_password}@cluster0.t8sswhx.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, host, () => {
      console.log(`Express app is listening on: http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.log(`${err} did not connect`);
  });


