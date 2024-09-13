import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello Vite + React!" });
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
