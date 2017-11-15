'use strict';

import validator from '../validator';

const Entity = function(entity) {
    validator(entity);
    this.id = entity.id;
    this.firstName = entity.firstName;
    this.lastName = entity.lastName;
    this.age = entity.age;
    this.sex = entity.sex;

};

Entity.prototype.getEntity = function() {
    return {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        sex: this.sex
    }
};

export default Entity
