import { GetPromise } from "./src/GetPromise";
import { PostPromise } from "./src/PostPromise";

export const getPromise = (url: string) => {
    GetPromise(url);
};

export const postPromise = (url: string, body: {}) => {
    PostPromise(url, body);
};