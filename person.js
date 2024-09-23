const person = {
    name: "John",
    age: 30
};

Object.defineProperty(person, 'age', {
    writable: false,   
    enumerable: false,
    configurable: false
});

const ageDescriptor = Object.getOwnPropertyDescriptor(person, 'age');
console.log("Дескриптор свойства 'age':", ageDescriptor);

person.age = 35; 
console.log("Попытка изменить age:", person.age);

for (let key in person) {
    console.log("Свойство:", key);
}

console.log("Объект person:", person);
