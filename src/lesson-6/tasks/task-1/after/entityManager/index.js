'use strict';

import validator from '../../validator';

const Entity = function({id, firstName, lastName, age, sex, social} = {}) {
    validator(arguments[0]);
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
    this.social = social;

};

Entity.prototype.getEntity = function() {
    return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            sex: this.sex,
            social: this.social

    }
};

export default Entity
