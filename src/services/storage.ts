import { IContact } from "interfaces";

export const getThemeStorage = (key: string): "light" | "dark" => {
  let value = window.localStorage.getItem(key);

  if (!value) {
  }
  if (value === "light") {
    return JSON.parse(value);
  }
  return "light";
};

export const changeThemeStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getContactStorage = (key: string): IContact[] | [] => {
  let value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
  return [];
};

export const changeContactStorage = (key: string, value: IContact[] | []) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
