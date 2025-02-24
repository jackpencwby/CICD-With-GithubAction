import express from "express";
import productRouter from "./routes/productRoutes.js";

import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.use("/api/product", productRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});