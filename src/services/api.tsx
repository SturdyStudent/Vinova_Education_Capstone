import axios from "axios";
import { ILimitProductResponse, IProducts } from "./interface";

const request = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const getProducts = (body: { productID?: string | number }) => {
  return request.get(
    `/products${body.productID ? "/".concat(body.productID as string) : ""}`
  );
};

export const searchProducts = (body: { query: string }) => {
  return request.get(`/products/search?q=${body.query}`);
};

export const getProductCategories = () => {
  return request.get<string[]>(`/products/categories`);
};

export const getLimitedProducts = (body: { limit: number; skip: number }) => {
  return request.get<ILimitProductResponse>(
    `/products?limit=${body.limit}&skip=${body.skip}`
  );
};

export const getProductsOfCategories = (body: { category: string }) => {
  return request.get(`/products/${body.category}`);
};

export const addNewProduct = (body: IProducts) => {
  return request.post("/products/add", JSON.stringify(body));
};

export const updateProduct = (body: IProducts, productID: number | string) => {
  return request.put(`/products/${productID}`, body);
};

export const deleteProduct = (productID: number | string) => {
  return request.delete(`/products/${productID}`);
};
