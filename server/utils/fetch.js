import fetch from "node-fetch";

export const Fetch = async (url, config) => {
  const response = await fetch(url, config);

  console.log(response.headers.get("content-type"));

  if (!response.ok) {
    throw { code: response.status };
  }
  
  if (response.headers.get("content-type") === 'application/json'){
    return response.json();
  }

  return  response;
};
