import fetch from "node-fetch";

export const Fetch = async (url, config) => {
  const response = await fetch(url, config);

  if (!response.ok) {
    throw { code: response.status };
  }

  return response.json();
};
