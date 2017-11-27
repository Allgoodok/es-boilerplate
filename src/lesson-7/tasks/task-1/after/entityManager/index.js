'use strict';

import validator from '../../validator';

const Entity = function({firstName, lastName, age, sex, social} = {}) {
    validator(arguments[0]);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
};

Entity.prototype.getEntity = function() {
    return {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            sex: this.sex
    }
};

export default Entity
