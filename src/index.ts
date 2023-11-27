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

const { PORT, HOST } = process.env;

const port = parseInt(PORT as string);
const host = HOST as string;

app.get("/", (req, res) => {
  res.send("testing...");
});

app.listen(port, host, () => {
  console.log(`Express app is listening on: http://${host}:${port}`);
});
