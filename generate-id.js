function generateId() {
    const randomNumber = Math.floor(Math.random() * 10000); 
    return `id-${randomNumber}`;
  }

  console.log(generateId());
  console.log(generateId()); 
  