import express from "express";
import { Linkedin } from "./services/linkedin";
import { Fetch } from "./utils/fetch";

const app = express();

app.post("/linkedin/user/post", async (req, res) => {
  const [, accessToken] = req.headers.authorization.split(" ");
  if (!accessToken) {
    return res.status(401).json();
  }

  const linkedin = new Linkedin(accessToken);
  const user = await linkedin.getUser(Fetch);
  const registeredPicture = await linkedin.registerImage(Fetch, user.id);
  res.send(registeredPicture);
});

app.use((req, res, error, next) => {
  if (error) {
    res.status(500).json({ error });
  }

  next();
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
