import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const PatentsApi = axios.create({
  baseURL: SERVER_URL,
  responseType: "json"
});

export const getPatentResults = (value) => {
  return PatentsApi.post("", { query: value }).then(({ data }) => {
    if (data !== undefined) {
      return data;
    } else {
      console.error("No data for patent search.")
      return null;
    }
  });
 }

 export const getRandomPatentResults = (value) => {
  return PatentsApi.post("", {"random": "True"}).then(({ data }) => {
    if (data !== undefined) {
      return data;
    } else {
      console.error("No data for patent search.")
      return null;
    }
  });
 }