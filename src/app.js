import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({}));

app.use(express.json({
    limit: "50mb"
}));

app.use(express.urlencoded({
    limit: "50mb",
    extended: true
}));

app.use(express.static("public"));

app.use(cookieParser());



export default app;