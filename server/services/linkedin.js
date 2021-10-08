export class Linkedin {
  constructor(token) {
    this.token = token;
  }

  getUser(http) {
    const url = "https://api.linkedin.com/v2/me";
    const config = {
      headers: {
        "X-Restli-Protocol-Version": "2.0.0",
        Authorization: `Bearer ${this.token}`,
      },
    };

    return http(url, config);
  }

  registerImage(http, userId) {
    const url = "https://api.linkedin.com/v2/assets?action=registerUpload";
    const body = {
      registerUploadRequest: {
        owner: `urn:li:person:${userId}`,
        recipes: ["urn:li:digitalmediaRecipe:feedshare-image"],
        serviceRelationships: [
          {
            identifier: "urn:li:userGeneratedContent",
            relationshipType: "OWNER",
          },
        ],
        supportedUploadMechanism: ["SYNCHRONOUS_UPLOAD"],
      },
    };
    const config = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(body),
    };

    return http(url, config);
  }

  imageUpload(http, uploadUrl, data) {
    const config = {
      method: "put",
      headers: {
        "Content-Type": "application/octet-stream",
        "X-Restli-Protocol-Version": "2.0.0",
        Authorization: `Bearer ${this.token}`,
      },
      body: data,
    };

    return http(uploadUrl, config);
  }
}
