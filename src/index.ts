import * as express from "express";
import user from "routes/user";
import "dotenv/config";

const app = express();

app.get("/", (_, res) => {
  res.send("Wellcome to sample server.");
});

app.use("/user", user);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT || 3000}`);
});
