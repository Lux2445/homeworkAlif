const project = {
    name: "Student Management System",
    team: ["Alice", "Bob", "Charlie"],
    status: "In Progress"
};

Object.preventExtensions(project);
project.deadline = "2024-12-01"; 
console.log("Попытка добавить свойство 'deadline':", project.deadline); 

Object.seal(project);
project.status = "Completed";
delete project.team; 
console.log("Свойство 'status' после изменения:", project.status); 
console.log("Свойство 'team' после удаления:", project.team);

Object.freeze(project);
project.name = "New Project Name";
console.log("Свойство 'name' после изменения:", project.name); 
