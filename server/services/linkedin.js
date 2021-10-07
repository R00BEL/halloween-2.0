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
}
