// ----------------------
// ✅ Task 1
// ----------------------

console.log("=== Task 1 ===");

let numbers = [5, -3, 7, -1, 0, 8, -6, 4, -2, 10];

let sumPositive = 0;
let sumTotal = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) continue;
  sumPositive += numbers[i];
}

for (let i = 0; i < numbers.length; i++) {
  sumTotal += numbers[i];
}

console.log("Sum of positive numbers:", sumPositive);
console.log("Sum of all numbers:", sumTotal);

// Modify array
numbers.push(15);
numbers.shift();

console.log("Modified array:", numbers);

// ----------------------
// ✅ Task 2
// ----------------------

console.log("\n=== Task 2 ===");

let student = {
  name: "Ahmed",
  age: 20,
  grade: "B",
  isGraduated: false
};

console.log("Name:", student.name);
console.log("Age:", student.age);

// Change grade
student.grade = "A";

// Display keys and values
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));

// Add email
student.email = "ahmed@example.com";

// Delete isGraduated
delete student.isGraduated;

console.log("Updated Student:", student);

// ----------------------
// ✅ Task 3
// ----------------------

console.log("\n=== Task 3 ===");

let students = [
  { name: "Sara", age: 22, grade: "B", isGraduated: true },
  { name: "Ali", age: 19, grade: "C", isGraduated: false },
  { name: "Mona", age: 21, grade: "A", isGraduated: true }
];

// Calculate average age
let totalAge = 0;
let graduated = 0;
let notGraduated = 0;

for (let i = 0; i < students.length; i++) {
  totalAge += students[i].age;

  if (students[i].isGraduated) {
    graduated++;
  } else {
    notGraduated++;
  }

  console.log(`Student ${i + 1} Keys:`, Object.keys(students[i]));
  console.log(`Student ${i + 1} Values:`, Object.values(students[i]));
}

let avgAge = totalAge / students.length;
console.log("Average Age:", avgAge);
console.log("Graduated Students:", graduated);
console.log("Not Graduated Students:", notGraduated);

// Add new student
let newStudent = {
  name: "Youssef",
  age: 20,
  grade: "B",
  isGraduated: false
};

newStudent.email = "youssef@example.com";
students.push(newStudent);

// Delete isGraduated from all students
for (let i = 0; i < students.length; i++) {
  delete students[i].isGraduated;
}

// Display final student info
console.log("\n=== Final Students ===");
students.forEach(student => {
  console.log(student);
});

// Display names
let names = students.map(s => s.name);
console.log("Student Names:", names);
console.log("Average Age:", avgAge);
console.log("Graduated:", graduated);
console.log("Not Graduated:", notGraduated);