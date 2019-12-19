import axios from "axios";

export const PostPromise = (url: string, body: {}) => {
    let value: any = {};
    axios.post(url, { ...body })
        .then(function (response: any) {
            value = response;
        })
        .catch(function (error: any) {
            value = error;
        })
        .finally(function () {
            // always executed
            window.console.log("value", value);
        });
    return value;
};
