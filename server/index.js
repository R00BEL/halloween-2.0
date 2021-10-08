import express from "express";
import { Linkedin } from "./services/linkedin";
import { Fetch } from "./utils/fetch";
import fileupload from "express-fileupload";

const app = express();
app.use(fileupload());

app.post("/linkedin/user/post", async (req, res) => {
  const [, accessToken] = req.headers.authorization.split(" ");
  if (!accessToken) {
    return res.status(401).json();
  }

  const file = req.files?.file;
  if (!file) {
    return res.status(400).json({
      message:
        "A file must be attached to the request. The file must be in the field 'file'",
    });
  }

  const linkedin = new Linkedin(accessToken);
  const user = await linkedin.getUser(Fetch);
  const registeredPicture = await linkedin.registerImage(Fetch, user.id);
  const uploadUrl =
    registeredPicture.value.uploadMechanism[
      "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"
    ].uploadUrl;

  await linkedin.imageUpload(Fetch, uploadUrl, file.data);
  res.send(registeredPicture);
});

app.use((req, res, error, next) => {
  if (error) {
    res.status(500).json({ error });
  }

  next();
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
