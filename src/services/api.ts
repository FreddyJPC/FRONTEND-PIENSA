import axios from "axios";
import { useEffect } from "react";

const API_URL = "http://localhost:8081";

const useAxiosAuth = () => {
  useEffect(() => {
    const setupInterceptors = async () => {
      axios.interceptors.request.use(
        (config) => {
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    };

    setupInterceptors();
  }, []);
};

const api = axios.create({
  baseURL: API_URL,
});

export { api, useAxiosAuth };
