const product = {
    name: "Smartphone",
    price: 500,
    category: "Electronics",
    inStock: false
};

product.price = 450;
product.inStock = true;
product.rating = 4.5;
delete product.category;
console.log(product);
