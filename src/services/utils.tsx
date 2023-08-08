import _ from "lodash";
import * as yup from "yup";
import {
  DELETE_PRODUCT_LIST,
  PRODUCT_DATA,
  USER_INFO,
} from "../assets/js/constants";
import { IProducts, IUserInfo } from "./interface";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTrybe: boolean;
  acceptFintech: boolean;
  acceptSubscribe: boolean;
};

export function parseArray(data: any = "[]"): any[] {
  if (Array.isArray(data)) {
    return data;
  }
  if (typeof data != "string") {
    return [];
  }
  try {
    return JSON.parse(data) as any[];
  } catch (e) {
    return [];
  }
}
export function parseObject(data: any = "{}"): any {
  if (typeof data != "string") {
    return data;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return {};
  }
}

export function localUserSignup(data: IUserInfo) {
  const oldAccount: IUserInfo[] = parseArray(localStorage.getItem(USER_INFO));
  if (oldAccount.some((item) => item.email == data.email)) {
    return false;
  }
  const newAccounts = _.uniqBy(oldAccount.concat(data), "email");
  localStorage.setItem(USER_INFO, JSON.stringify(newAccounts));
}

export function saveProductData(data: IProducts, id?: number) {
  const products: IProducts[] = parseArray(localStorage.getItem(PRODUCT_DATA));

  if (id) {
    const index = _.findIndex(products, { id: id });
    if (index >= 0) {
      products.splice(index, 1, { ...data, id });
    } else {
      products.push({ ...data, id });
    }
  } else {
    products.push({ ...data, id: products.length + 102 });
  }

  localStorage.setItem(PRODUCT_DATA, JSON.stringify(products));
}

export function deleteLocalProduct(id: number | string) {
  const deletedProducts: number[] = parseArray(
    localStorage.getItem(DELETE_PRODUCT_LIST)
  );

  deletedProducts.push(id as number);
  localStorage.setItem(DELETE_PRODUCT_LIST, JSON.stringify(deletedProducts));
}
