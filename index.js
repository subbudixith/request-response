import { GetPromise } from "./src/GetPromise";
import { PostPromise } from "./src/PostPromise";

export const getPromise = (url) => {
    GetPromise(url);
};

export const postPromise = (url, body) => {
    PostPromise(url, body);
};