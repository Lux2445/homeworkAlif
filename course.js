const course = {
    title: "JavaScript для начинающих",
    instructor: "Yosin Nurov",
    duration: 40,
    price: 100
  };

  const courseValues = Object.values(course);

  courseValues.forEach(value => console.log(value));
  