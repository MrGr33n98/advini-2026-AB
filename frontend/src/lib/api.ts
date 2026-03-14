import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchHomeData() {
  try {
    const res = await api.get('/home');
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchProducts() {
  try {
    const res = await api.get('/products');
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
