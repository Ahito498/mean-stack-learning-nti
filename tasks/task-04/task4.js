// Task 4: Employee Evaluation Program
// Objective: Build a program to evaluate employees based on multiple criteria

// Base salary for calculations
const baseSalary = 5000;

// Function to get employee data
function getEmployeeData() {
    const name = prompt("Enter employee name:");
    const age = parseInt(prompt("Enter employee age:"));
    const yearsOfExperience = parseInt(prompt("Enter years of experience:"));
    const selfRating = parseInt(prompt("Enter self-rating (1-10):"));
    
    return { name, age, yearsOfExperience, selfRating };
}

// Function to determine job category based on years of experience
function determineJobCategory(yearsOfExperience) {
    if (yearsOfExperience < 2) {
        return "Junior";
    } else if (yearsOfExperience >= 2 && yearsOfExperience <= 5) {
        return "Mid-Level";
    } else if (yearsOfExperience > 5 && yearsOfExperience <= 10) {
        return "Senior";
    } else {
        return "Expert";
    }
}

// Function to check performance level using switch statement
function checkPerformanceLevel(selfRating) {
    switch (true) {
        case selfRating >= 9:
            return "Excellent";
        case selfRating >= 7:
            return "Good";
        case selfRating >= 5:
            return "Average";
        default:
            return "Needs Improvement";
    }
}

// Function to calculate bonus based on years of experience
function calculateBonus(yearsOfExperience) {
    if (yearsOfExperience >= 0 && yearsOfExperience <= 2) {
        return baseSalary * 0.10; // 10% bonus
    } else if (yearsOfExperience >= 3 && yearsOfExperience <= 5) {
        return baseSalary * 0.15; // 15% bonus
    } else {
        return baseSalary * 0.20; // 20% bonus
    }
}

// Function to determine work shift using Date object
function determineWorkShift() {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 9 && currentHour < 18) {
        return "day shift";
    } else {
        return "night shift";
    }
}

// Function to calculate final salary
function calculateFinalSalary(baseSalary, bonus) {
    return baseSalary + bonus;
}

// Function to display results
function displayResults(employeeData, jobCategory, performanceLevel, bonus, finalSalary, workShift) {
    const summary = `
=== EMPLOYEE EVALUATION REPORT ===
Name: ${employeeData.name}
Age: ${employeeData.age}
Years of Experience: ${employeeData.yearsOfExperience}
Self-Rating: ${employeeData.selfRating}/10

Job Category: ${jobCategory}
Performance Level: ${performanceLevel}
Base Salary: $${baseSalary}
Bonus: $${bonus.toFixed(2)}
Final Salary: $${finalSalary.toFixed(2)}
Current Work Shift: ${workShift}

=== END OF REPORT ===
    `;
    
    // Display in console
    console.log(summary);
    
    // Display alert
    alert(`Employee Evaluation Complete!\n\nName: ${employeeData.name}\nJob Category: ${jobCategory}\nPerformance: ${performanceLevel}\nFinal Salary: $${finalSalary.toFixed(2)}`);
    
    // Display in DOM
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = summary.replace(/\n/g, '<br>');
    }
}

// Main function to run the employee evaluation program
function runEmployeeEvaluation() {
    console.log("=== EMPLOYEE EVALUATION PROGRAM ===");
    
    try {
        // Step 1: Gather employee data
        const employeeData = getEmployeeData();
        
        // Step 2: Determine job category
        const jobCategory = determineJobCategory(employeeData.yearsOfExperience);
        
        // Step 3: Check performance level
        const performanceLevel = checkPerformanceLevel(employeeData.selfRating);
        
        // Step 4: Calculate bonus
        const bonus = calculateBonus(employeeData.yearsOfExperience);
        
        // Step 5: Calculate final salary
        const finalSalary = calculateFinalSalary(baseSalary, bonus);
        
        // Step 6: Determine work shift
        const workShift = determineWorkShift();
        
        // Step 7: Display results
        displayResults(employeeData, jobCategory, performanceLevel, bonus, finalSalary, workShift);
        
    } catch (error) {
        console.error("Error in employee evaluation:", error);
        alert("An error occurred during employee evaluation. Please try again.");
    }
}

// Run the program when the script loads
console.log("Employee Evaluation Program Ready!");
console.log("Call runEmployeeEvaluation() to start the program.");
