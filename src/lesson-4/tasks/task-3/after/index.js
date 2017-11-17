'use strict';

export const getInfo = (data) => {
    const {arr0 = [], arr1 = [], arr2 = []} = data;

    const concatArrays = [...arr0, ...arr1, ...arr2]

    return {
        length: concatArrays.length,
        maxValue: Math.max(...concatArrays),
        minValue: Math.min(...concatArrays)
    }
};
