// Task 2: JavaScript Login System (Terminal version)
// This simulates the original task2.js but works in Node.js terminal

console.log("=== Task 2: Login System ===");

let userName = "Hassan";
let passWord = 5544;

console.log("Expected username:", userName);
console.log("Expected password:", passWord);
console.log("");

// Simulate user input (in real scenario, these would come from prompt)
let username = "Hassan";  // Simulating user entering "Hassan"
let password = "5544";    // Simulating user entering "5544"

console.log("User entered - Username:", username);
console.log("User entered - Password:", password);
console.log("");

if(!username){
    console.log("❌ Error: username is required");
} else {
    console.log("✅ Username provided");
}

if(!password){
    console.log("❌ Error: password is required");
} else {
    console.log("✅ Password provided");
}

// Check if credentials match
if(username === userName && password == passWord) {
    console.log("🎉 Login successful! Welcome Hassan!");
} else if(username && password) {
    console.log("❌ Login failed: Invalid credentials");
}

console.log("");
console.log("=== Task 2 Completed ===");
