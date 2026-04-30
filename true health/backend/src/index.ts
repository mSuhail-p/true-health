import express from "express";
import Router from "./routes/route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.PORT;
 

app.listen(PORT, () => {
  console.log("project running on port 3000");
});
