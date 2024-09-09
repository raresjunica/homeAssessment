import axios from "axios";

const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

// Create an Axios instance
const pixabayApi = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: apiKey,
  },
});

export default pixabayApi;
