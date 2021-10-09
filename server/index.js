import express from "express";
import asyncHandler from "express-async-handler";
import fileupload from "express-fileupload";

import { Linkedin } from "./services/linkedin/linkedin";
import { Fetch } from "./utils/fetch";

const app = express();
app.use(fileupload());

app.post(
  "/linkedin/user/post",
  asyncHandler(async (req, res) => {
    const authorization = req.headers?.authorization;
    if (!authorization) {
      return res.status(400).json();
    }
    const [, accessToken] = req.headers.authorization.split(" ");

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
    await linkedin.postCreation(Fetch, user.id, registeredPicture.value.asset);
    res.send();
  })
);

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({
    message: error.message || "Something went wrong",
  });
  next();
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
