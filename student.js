const student = {
    name: 'Alice',
    age: 21,
    major: 'Computer Science',
    gpa: 3.8
};

const keys = Object.keys(student);

console.log(`Количество свойств: ${keys.length}`);

keys.forEach(key => {
    console.log(`${key}: ${student[key]}`);
});
