'use strict';

import { DataManager } from '../after/dataManager';

import Entity from '../after/entityManager';

// Create instance for man
const man = new Entity({
    id: 0,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male',
    social: [
        {
            id: 1,
            title: 'facebook',
            views: 21
        },
        {
            id: 2,
            title: 'youtube',
            views: 23
        },
        {
            id: 3,
            title: 'twitter',
            views: 2
        }
    ]
});

const woman = new Entity({
    id: 1,
    firstName: 'Lilly',
    lastName: 'Potter',
    age: 19,
    sex: 'female',
    social: [
        {
            id: 'koko',
            title: 'facebook',
            views: 168
        },
        {
            id: 2,
            title: 'youtube',
            views: 254
        },
        {
            id: 3,
            title: 'twitter',
            views: 242
        }
    ]
});

const dataManager = new DataManager();
// Get data for man
const firstEntity = man.getEntity();

const secondEntity = woman.getEntity();

// Add man to collection
dataManager.add(firstEntity);

dataManager.add(secondEntity)

const totalViews1 = dataManager.getEntityTotalViews(firstEntity.id);
console.log(totalViews1); // 46

const totalViews2 = dataManager.getEntityTotalViews(firstEntity.id, [1, 3]);
console.log(totalViews2); // 23

const totalViews3 = dataManager.getEntityTotalViews(firstEntity.id, ['facebook', 'twitter']);
console.log(totalViews3); // 23

const totalViews4 = dataManager.getEntityTotalViews(firstEntity.id, null, total => total * 3);
console.log(totalViews4); // 138

let entitiesSorted = dataManager.getEntitiesSortedByPopularityAscending();

entitiesSorted = dataManager.getEntitiesSortedByPopularityDescending();
