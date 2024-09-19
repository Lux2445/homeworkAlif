function calculateDiscount(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    return price - discount;
  }
  

  console.log(calculateDiscount(1000, 15)); 
  