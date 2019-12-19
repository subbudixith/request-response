import axios from "axios";

export const GetPromise = (url: string) => {
    let value: any = {};
    axios.get(url)
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
