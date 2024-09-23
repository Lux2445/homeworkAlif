function countProperties(obj) {
    return Object.keys(obj).length;
  }

  const user = { name: "Yosin", age: 17, city: "Dushanbe" };
  console.log(countProperties(user)); 
  