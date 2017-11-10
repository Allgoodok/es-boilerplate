'use strict';

export default function func(duration, frequency, callback){
    for (let i = 0; i <= duration; i++) {
        setTimeout(function () {
            console.log(callback(i));}, frequency * i);
    }
}
