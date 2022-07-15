import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./routes/product";
import cateRouter from "./routes/category";
import userRouter from "./routes/user";
const app = express();

// using middleware
app.use(express.json()); // using content-type/json
app.use(cors()); // public api for client access
// using created router
app.use("/api", productRouter);
app.use("/api", cateRouter);
app.use("/api", userRouter);
// connect to database
mongoose.connect("mongodb://localhost:27017/myapp1", () => {
	console.log("Connected to database!");
});

// run server
app.listen(process.env.PORT, () => {
	console.log(`App is running on: http://localhost:${process.env.PORT}`);
});
