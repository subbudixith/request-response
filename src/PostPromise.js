import axios from "axios";

export const PostPromise = (url, body) => {
    let value = {};
    axios.post(url, { ...body })
        .then(function (response) {
            value = response;
        })
        .catch(function (error) {
            value = error;
        })
        .finally(function () {
            // always executed
            window.console.log("value", value);
        });
    return value;
};
