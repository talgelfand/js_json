'use strict';

const person = {
    name: 'Alex', 
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(person)); // создание копии объекта
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);