'use strict';

import Entity from '../entityManager/index';
import validator from '../validator';

const entityMap = new Map();

const addEntity = (entity) => {
    validator(entity);

    if (getEntityById(entity.id) !== null) {
        throw new Error("id is already in use")
    }

    entityMap.set(entity.id, entity)
};

const getEntities = () => {
    const result = entityMap.size ? entityMap : null;
    return result;
};

const getCount = () => {
    return entityMap.size
};

const getEntityById = (id) => {
    if (typeof id !== "number") {
        throw new Error("id should be a number");
    }
    const result = typeof entityMap.get(id) === Entity ? entityMap.get(id) : null;
    return result
};

const getFirstEntity = () => {
    const result = entityMap.values().size ? Array.from(entityMap.values()).reverse().pop() : null;
    return result
};

const getLastEntity = () => {
    const result = entityMap.values().size ? Array.from(entityMap.values()).pop() : null;
    return result
};

const filter = (callback) => {
    if (typeof callback !== "function") {
        throw new Error('callback should be a function')
    }

    let filteredMap = new Map();
    for (let [key, value] of entityMap) {
        if (callback(value)) {
            filteredMap.set(key, value)
        }
    }

    const result = filteredMap.size ? entityMap : null;

    return result;
};

export {addEntity, getEntities, getCount, getEntityById, getFirstEntity, getLastEntity, filter}
