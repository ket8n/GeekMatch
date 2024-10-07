import express from "express";

const app = express();

app.use("/test", (req, res) => {
  res.send("ok");
});

app.listen(5000, () => {
  console.log("Server is listening on PORT 5000...");
});
