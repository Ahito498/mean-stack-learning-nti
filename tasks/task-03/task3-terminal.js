// Task 3: JavaScript Age Calculator (Terminal version)
// This simulates the original task3.js but works in Node.js terminal

console.log("=== Task 3: Age Calculator ===");

// Simulate user input (in real scenario, these would come from prompt)
let name = "Hassan";           // Simulating user entering "Hassan"
let birthYear = 2002;          // Simulating user entering "2002"
let isStudent = true;          // Simulating user confirming "Are you a student?"

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;  // Calculate age
let studentStatus = isStudent ? 'a student' : 'not a student';

let ageCategory = '';
if (age < 13) {
    ageCategory = 'kid';
}
else if (age >= 13 && age <= 17) {
    ageCategory = 'teen';
} else if (age >= 18 && age < 60) {
    ageCategory = 'adult';
} else {
    ageCategory = 'senior';
}

console.log(`Hello, ${name}! You are ${age} years old, ${studentStatus}, and you are a ${ageCategory}.`);
console.log("Don't forget to study hard!");

console.log("");
console.log("=== Task 3 Completed ===");
