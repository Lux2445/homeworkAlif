const user = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    age: 30
  };
  
  const address = {
    city: 'New York',
    state: 'NY',
    postalCode: '10001'
  };

  const userProfile = { ...user, ...address };

// const userProfile = Object.assign({}, user, address);

// console.log(userProfile);
  
  console.log(userProfile);
  