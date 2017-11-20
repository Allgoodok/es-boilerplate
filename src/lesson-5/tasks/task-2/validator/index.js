'use strict';

export default ({id, firstName, lastName, age, sex}) => {
    if(typeof id !== "number") {
            throw new Error("id should be number")
        }
    if(typeof firstName !== "string") {
            throw new Error("firstName should be string")
        } else if (firstName === '') {
            throw new Error("firstName should not be empty")
        }
    if(typeof lastName !== "string") {
            throw new Error("lastName should be string")
        } else if (lastName === '') {
            throw new Error("lastName should not be empty")
        }
    if(typeof age !== "number") {
            throw new Error("age should be number")
        } else if(age < 0) {
            throw new Error("age should not be a negative number")
        }

        if(typeof sex !== "string") {
            throw new Error("age should be string")
        }

        if(!['male', 'female'].includes(sex)) {
            throw new Error("sex should be male/female")
        }
}
