import axios, { AxiosResponse } from "axios";
import { type Product } from "../../types";

export const geProductList = (): Promise<AxiosResponse<Product>> => {
  return new Promise<AxiosResponse<Product>>((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/products.json`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => reject(error));
  });
};
