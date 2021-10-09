import fetch from "node-fetch";

export const Fetch = async (url, config) => {
  const response = await fetch(url, config);

  if (!response.ok) {
    throw { code: response.status };
  }

  if (response.headers.get("content-type") === "application/json") {
    return response.json();
  }

  return response;
};
