import axios from "axios";
import { IDATA } from "../Components/Form";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const sendMail = async (dataList: IDATA) => {
  const { data } = await api.post("/mail", dataList);
  return data;
};
