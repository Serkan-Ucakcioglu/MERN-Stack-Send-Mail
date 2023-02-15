import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const sendMail = async (data) => {
  const { data } = await api.post("/mail", data);
  return data;
};
