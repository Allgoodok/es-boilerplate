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
        },

        getEntityTotalViews(entityId, socialArray = null, callback = null) {
            if (typeof entityId !== "number") {
                throw new Error("EntityId should be number")
            }

            const entity = this.getEntityById(entityId);
            let socialData = entity.social;

            if (Array.isArray(socialArray)) {
                if (!socialArray.some(isNaN)) {

                    socialData = socialData.filter(( item ) => {
                        return socialArray.includes( item.id )
                    });

                } else if (socialArray.every(( item ) => typeof item === "string")) {

                    socialData = socialData.filter((item) => {
                        return socialArray.includes( item.title )
                    });

                } else {
                    throw new Error("socialArray should contain only numbers or only strings")
                }
            }


            let result = socialData.reduce((prevItem, { views }) => {

                return prevItem += views;

            }, 0);

            if (typeof callback === "function") {
                result = callback(result);
            }

            return result
        },

        getEntitiesSortedByPopularityAscending() {
                const result = Array.from(entityMap.values()).sort(({id : idA}, {id : idB}) => {
                    return this.getEntityTotalViews(idA) - this.getEntityTotalViews(idB);
                });

                this.logByPopularity(result);

        },

        getEntitiesSortedByPopularityDescending() {
            const result = Array.from(entityMap.values()).sort(({id : idA}, {id : idB}) => {
                return this.getEntityTotalViews(idB) - this.getEntityTotalViews(idA);
            });

            this.logByPopularity(result);

        },

        logByPopularity(result) {
            result.forEach(({id, firstName, lastName }) => console.log(id + " " + firstName + " " + lastName + " Total views: " + this.getEntityTotalViews(id)));
        }


    }
}
