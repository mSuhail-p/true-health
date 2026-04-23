import express from "express";
import Router from "./routes/user.route.js";
const app = express();

app.use("/", Router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("project running on port 3000");
});
