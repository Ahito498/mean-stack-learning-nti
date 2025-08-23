let name = prompt('Enter your name');
let birthYear = prompt('Enter your birth year');
let isStudent = confirm('Are you a student?');

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;  // Calculate age
let studentStatus = isStudent ? 'a student' : 'not a student';

ageCategory = '';
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

console.log(`Hello, ${name}! You are ${age} years old, ${studentStatus}, and you are a ${ageCategory}.\n Don't forget to study hard!`);

alert(`Hello, ${name}! You are ${age} years old, ${studentStatus}, and you are a ${ageCategory}. Don't forget to study hard!`);

document.getElementById('result').innerText = `Hello, ${name}! You are ${age} years old, ${studentStatus}, and you are a ${ageCategory}. Don't forget to study hard!`;