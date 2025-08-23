let userName = "Hassan";
let passWord = 55443322;

let username = prompt("Enter your username");
let password = prompt("Enter your password");

if(!username){
    alert("username is required");
}
else if (password.length < 8) {
    alert("password must be at least 8 characters long");
}
else if (username === userName && password == passWord) {
    alert("welcome " + username);
} else {
    alert("invalid username or password");
}