// Task 6: JavaScript Timers and Intervals
// Objective: Working with setTimeout, setInterval, and timer functions

console.log("=== Task 6: Timers and Intervals ===");

// Function to demonstrate setTimeout
function demonstrateSetTimeout() {
    console.log("Starting setTimeout demonstration...");
    
    // Set a timeout for 2 seconds
    const timeoutId = setTimeout(() => {
        console.log("Hello, User!");
    }, 2000);
    
    // Clear the timeout before it executes (for demonstration)
    setTimeout(() => {
        clearTimeout(timeoutId);
        console.log("Timeout was cleared before it executed.");
    }, 1000);
}

// Function to demonstrate setInterval with countdown
function demonstrateSetInterval() {
    console.log("Starting setInterval countdown...");
    
    let count = 10;
    
    // Create an interval that counts down every second
    const intervalId = setInterval(() => {
        console.log(count);
        count--;
        
        // Stop the interval when count reaches 0
        if (count < 0) {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000);
    
    // Clear the interval after 5 seconds (for demonstration)
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Interval cleared after 5 seconds.");
    }, 5000);
}

// Function to calculate and display result
function calculateResult() {
    const a = 5;
    const b = 15;
    const result = a + b;
    console.log("Result:", result);
}

// Main execution
console.log("Starting Task 6 execution...");
console.log("");

// Run the demonstrations
calculateResult();
demonstrateSetTimeout();
demonstrateSetInterval();

console.log("");
console.log("✅ Task 6 completed successfully!");