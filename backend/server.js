import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import colors from "colors";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
