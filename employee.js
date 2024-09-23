const employee = {
    name: "Alice",
    position: "Junior Developer",
    salary: 50000,
    isFullTime: true
};

employee.position = "Senior Developer";
employee.hireDate = "2023-09-01";

delete employee.salary;

console.log(employee);
