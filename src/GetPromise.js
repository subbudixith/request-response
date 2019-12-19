import axios from "axios";

export const GetPromise = (url) => {
    let value = {};
    axios.get(url)
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
