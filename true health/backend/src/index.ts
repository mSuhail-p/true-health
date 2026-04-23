import express from "express";
import Router from "./routes/user.route.js";
const app = express();

app.use("/", Router);

const PORT = process.env.PORT;
console.log(PORT, "it is port");

app.listen(3000, () => {
  console.log("project running on port 3000");
});
