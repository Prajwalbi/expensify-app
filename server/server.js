//e.g server.js
import express from "express";
import ViteExpress from "vite-express";

const app = express();

const port = process.env.PORT || 3000;
ViteExpress.config({ mode: "production" })
app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, port, () => console.log("Server is listening..."));