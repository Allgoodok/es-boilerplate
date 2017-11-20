'use strict';

import validator from '../../validator';

export const DataManager = function() {
    const entityMap = new Map();
    return {
        getEntityById(id) {
            if (typeof id !== "number") {
                throw new Error("id should be a number");
            }
            const result = typeof entityMap.get(id) === 'object' ? entityMap.get(id) : null;
            return result
        },
        add(entity) {
            validator(entity);

            if (this.getEntityById(entity.id) !== null) {
                throw new Error("id is already in use")
            }

            entityMap.set(entity.id, entity)
        },
        getEntities() {
            const result = entityMap.size ? entityMap : null;
            return result;
        },

        getCount() {
            return entityMap.size ? entityMap.size : null;
        },

        getFirstEntity() {
            const result = entityMap.size ? Array.from(entityMap.values()).reverse().pop() : null;
            return result
        },

        getLastEntity() {
            const result = entityMap.size ? Array.from(entityMap.values()).pop() : null;
            return result
        },

        filter(callback) {
            if (typeof callback !== "function") {
                throw new Error('callback should be a function')
            }

            let filteredMap = new Map();
            for (let [key, value] of entityMap) {
                if (callback(value)) {
                    filteredMap.set(key, value)
                }
            }

            const result = filteredMap.size ? filteredMap : null;

            return result;
        }
    }
};
