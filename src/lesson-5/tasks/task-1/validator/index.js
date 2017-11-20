'use strict';

export default ({id, firstName, surName, lastName, sex}) => {
    if(typeof id !== "number") {
            throw new Error("id should be number")
    }

    if(typeof firstName !== "string") {
            throw new Error("firstName should be string")
        } else if (firstName === '') {
            throw new Error("firstName should not be empty")
    }

    if(typeof surName !== "string") {
            throw new Error("surName should be string")
        } else if (surName === '') {
            throw new Error("surName should not be empty")
    }

    if(typeof lastName !== "string") {
        throw new Error("lastName should be string")
    } else if (lastName === '') {
        throw new Error("lastName should not be empty")
    }

    if(typeof sex !== "string") {
            throw new Error("age should be string")
    }

    if(!['male', 'female', 'robot'].includes(sex)) {
            throw new Error("sex should be male/female")
    }
}
