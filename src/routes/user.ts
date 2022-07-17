import * as express from "express";

const user = express.Router();

user.use((req, res, next) => {
  next();
});

user.get("/", (req, res) => {
  res.send("api user");
});

export default user;
