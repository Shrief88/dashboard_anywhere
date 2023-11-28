import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";
import quizRouter from "./routes/quiz";
import announcementRouter from "./routes/announcement";
import instructorRouter from "./routes/instructor";

dotenv.config();

const app = express();

const limiter = rateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 20, // limit each IP to 20 requests per windowMs
})

app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(compression());
app.use(express.static("public"));

app.use("/quiz", quizRouter);
app.use("/announcement", announcementRouter);
app.use("/instructor", instructorRouter);

const { PORT, HOST, MONGO_URL } = process.env;
const port = parseInt(PORT as string);
const host = HOST as string;
const mongo_url = MONGO_URL as string;

app.get("/", (req, res) => {
  res.send("testing...");
});

async function main() {
  try {
    await mongoose.connect(mongo_url);
    console.log("Connected to MongoDB");
    app.listen(port, host, () => {
      console.log(`Express app is listening on: http://${host}:${port}`);
    });
  } catch (err) {
    console.log(`${err} did not connect`);
  }
}

main();
