'use strict';

import validator from '../../validator';

export const DataManager = (function() {
    const entityMap = new Map();

    function DataManager() {

    }

    DataManager.prototype.createId = () => Math.random().toString(36).substr(2, 9);

    DataManager.prototype.getEntityById = (id) => {
        if (typeof id !== "string") {
            throw new Error("id should be a string");
        }
        const result = typeof entityMap.get(id) === 'object' ? entityMap.get(id) : null;
        return result
    };

    DataManager.prototype.add = function(entity) {
        validator(entity);
        let newId = DataManager.prototype.createId();
        while (this.getEntityById(newId) !== null) {
            newId = this.createId();
        }


        entityMap.set(newId, entity)
    };

    DataManager.prototype.getEntities = () => {
        const result = entityMap.size ? entityMap : null;
        return result;
    };

    DataManager.prototype.getCount = () => {
        return entityMap.size ? entityMap.size : null;
    };

    DataManager.prototype.getFirstEntity = () => {
        const result = entityMap.size ? [...entityMap.values()][0] : null;
        return result
    };

    DataManager.prototype.getLastEntity = () => {
        const result = entityMap.size ? [...entityMap.values()].pop() : null;
        return result
    };

    DataManager.prototype.filter = (callback) => {
        if (typeof callback !== "function") {
            throw new Error('callback should be a function')
        }

        let result = [...entityMap.values()].filter(callback);
        result = result.length ? result : null;

        return result;
    };

    return DataManager;

})();
