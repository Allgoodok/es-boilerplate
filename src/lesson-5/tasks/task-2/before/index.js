import {
    DataManager
} from '../after/dataManager';

import Entity from '../after/entityManager';

// Create instance for man
const man = new Entity({
    id: 0,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male'
});

// Create instance for woman
const woman = new Entity({
    id: 1,
    firstName: 'Lisa',
    lastName: 'Black',
    age: 19,
    sex: 'female'
});

// Create data Manager
const dataManager = new DataManager();

// Get data for man
const firstEntity = man.getEntity();
console.log(firstEntity);

// Get data for woman
const secondEntity = woman.getEntity();
console.log(secondEntity);

// Add man to collection
dataManager.add(firstEntity);

// Add woman to collection
dataManager.add(secondEntity);
// Get all entities
const all = dataManager.getEntities();
console.log(all);
// Print entities count
const count = dataManager.getCount();
console.log(count);

// Get entity by entity.id
const entityById = dataManager.getEntityById(0);
console.log(entityById);
// Get first entity
const first = dataManager.getFirstEntity();
console.log(first);

// Get last entity
const last = dataManager.getLastEntity();
console.log(last);

// Filter entities by callback
const filtered = dataManager.filter(({ sex, age }) => {
    return sex === 'male' && age > 20;
});

console.log(filtered);
