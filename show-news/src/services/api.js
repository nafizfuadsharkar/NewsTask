import axios from "axios";

const BASE_URL = "http://localhost:3000"; // your backend URL

export const fetchNews = async (filters = {}) => {
  const res = await axios.get(`${BASE_URL}/news-db`, { params: filters });
  return res.data;
};

export const fetchFilters = async () => {
  const res = await axios.get(`${BASE_URL}/filters`);
  return res.data;
};
