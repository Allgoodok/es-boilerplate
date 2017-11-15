'use strict';

export default (duration = 10, frequency = 1000, callback = item => item * 3) => {
    if (typeof duration !== "number") {
        throw new Error("Invalid type of argument duration")
    }
    if (typeof frequency !== "number") {
        throw new Error("Invalid type of argument frequency")
    }
    if (typeof callback !== "function") {
        throw new Error("Invalid type of argument callback")
    }

    for (let i = 0; i <= duration; i++) {
        setTimeout(() => {
            console.log(callback(i))}, frequency * i);
    }
}
