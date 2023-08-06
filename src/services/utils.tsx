import _ from "lodash";
import * as yup from "yup";
import { USER_INFO } from "../assets/js/constants";
import { IUserInfo } from "./interface";

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
  return true;
}
