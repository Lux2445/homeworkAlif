const laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    year: 2022,
    price: 2500
};

for (let key in laptop) {
    console.log(`${key}: ${laptop[key]}`);
}
