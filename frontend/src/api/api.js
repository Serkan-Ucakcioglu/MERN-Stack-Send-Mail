import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const sendMail = async (dataList) => {
  const { data } = await api.post("/mail", dataList);
  return data;
};
