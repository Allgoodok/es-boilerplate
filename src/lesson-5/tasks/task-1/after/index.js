'use strict';
import validator from "../validator"


const Entity = function ({id, firstName, surName, lastName, sex}) {
    validator(arguments[0]);
    this.id = id;
    this.firstName = firstName;
    this.surName = surName;
    this.lastName = lastName;
    this.sex = sex;
};

const talk = {
    say() {
        console.log(this);
    },
    sayAge() {
        console.log(this.age)
    }
};

const age = {
    fixAge(number) {
        if (typeof number !== 'number') {
            throw new Error("Number should be type of number")
        }
        this.age = number;
    }
};

export {age, Entity, talk}
