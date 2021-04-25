import axios from "axios"
import { API_ALL_IMAGES } from "../constants/api"

export const fetchAllImages = () => {
  const data = axios.get(API_ALL_IMAGES);
  return data;
}

export const fetchPost = (id) => {
  const data = axios.get(`${API_ALL_IMAGES}/${id}`);
  return data;
}