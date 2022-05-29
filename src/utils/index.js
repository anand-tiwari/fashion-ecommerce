/*
 Covert key-value object in query params string
 Eg. paramObj = {name: ['test1', 'test2'], api-key: '123'}
 output =>  ?name=test&name=test2&api-key=123
 */
export const serializeQueryParams = function(paramObj) {
    if (paramObj) {
        return (
            "?" +
            Object.keys(paramObj)
            .map((k) => {
                if (typeof paramObj[k] === "object") {
                    return paramObj[k]
                        .map((v) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
                        .join("&");
                } else {
                    return `${encodeURIComponent(k)}=${encodeURIComponent(
              paramObj[k]
            )}`;
                }
            })
            .join("&")
        );
    }
    return "";
};

export const constructRouteParams = (params) => {
    const res = {};
    params.forEach((data) => {
        const key = data[0];
        const value = data[1];
        if (res[key]) {
            res[key] = [...res[key], value];
        } else {
            res[key] = [value];
        }
    });
    return res;
};