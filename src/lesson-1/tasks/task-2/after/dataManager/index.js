'use strict';

let entityMap = new Map();

let addEntity = function (entity) {
    entityMap.set(entity.id, entity)
};

let getEntities = function () {
    return entityMap
};

let getCount = function () {
    return entityMap.size
};

let getEntityById = function (id) {
    return entityMap.get(id)
};

let getFirstEntity = function () {
    return Array.from(entityMap.values()).reverse().pop()
};

let getLastEntity = function () {
    return Array.from(entityMap.values()).pop()
};

let filter = function (callback) {
    let filteredMap = new Map();
    for (let [key, value] of entityMap) {
        if (callback(value)) {
            filteredMap.set(key, value)
        }
    }
    return filteredMap
};

export {addEntity, getEntities, getCount, getEntityById, getFirstEntity, getLastEntity, filter}
