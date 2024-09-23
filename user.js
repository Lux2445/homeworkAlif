const user = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    age: 25
};

const { username, email, age, country = 'Unknown' } = user;

console.log(`Username: ${username}`);
console.log(`Email: ${email}`);
console.log(`Age: ${age}`);
console.log(`Country: ${country}`);
