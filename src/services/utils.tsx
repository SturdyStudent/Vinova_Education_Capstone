import _ from "lodash";

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
