'use strict';

let Entity = function (entity) {
    this.entityData = entity;

    this.getEntity = function() {
        return this.entityData;
    };
};

export default Entity
