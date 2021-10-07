import express from "express";

const app = express();

app.post("/linkedin/user/post", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, error, next) => {
  if (error) {
    res.code(500).json({ error });
  }

  next();
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
