//Task 1
const arr = [2, 8, 10, 14, 4, 1, 17];
function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
        throw new Error('Array undefined');
    }
    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('Answer is not correct');
    }
    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
        throw new Error('Answer is not correct');
    }
    return arr[first] + arr[second];
}

try {
    const result = sumSliceArray(arr, -1, 7);
    console.log("Result:", result);

}
catch {
    console.log("Happend something wrong");
}


//Task 2
function checkAge(name, age, status) {
    if (typeof age !== "number" || age.length === 0 || name.length === 0 || status.length === 0) {
        throw new Error("The field is empty! Please enter your age");
    }
    if (status !== "user" && status !== "admin" && status !== "moderator") {
        throw new EvalError("Write correct status!");
    }
    if (age < 18 || age > 70) {
        throw new RangeError("Your age is so young or so old to watch this film. Sorry!");
    }
}

try {
    const name = prompt('What is your name?');
    const age = +prompt('What is your age?');
    const status = prompt('What is your status (admin, moderator, user)?');
    checkAge(name, age, status);
    alert("Have a nice time to watch film!");
}
catch (err) {
    console.log(err.name);
    console.log(err.message);
}

//Task 3
function calcRectangleArea(width, height) {
    if (width <= 0 || height <= 0) {
        throw new Error("Invalid number. Must be positive numbers.");
    }
    if (typeof width !== "number" || typeof height !== "number") {
        throw new Error("Invalid number. Must be number, not string.");
    }
    return width * height;
}

try {
    const square = calcRectangleArea("5", 10);
    console.log("Square:", square);
} catch (error) {
    console.log(error.message);
}

//Task 4
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    if(month < 1 || month > 12){
        throw new MonthException("Incorrect month");
    }
    const months =  [ "January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
    return months[month - 1];
}
try{
    console.log(showMonthName(2));
}
catch (err){
    console.log(err.message);
}


//Task 5

class UserException extends Error{
    constructor(message){
        super(message);
        this.name = "UserException";
    }
}

function showUser(id) {
    if ( id < 0 ){
        throw new UserException("Id must not be negative:");
    }
    return {id};
}
function showUsers(ids) {
    const validUsers = [];
    for (const id of ids){
        try{
            const user = showUser(id);
            validUsers.push(user);
        }
        catch (error){
            console.error(`${error.name}, ${error.message}, ${id}`)
        }
    }
    return validUsers;
}

const users = [7, -12, -44, 22];
const validUsers = showUsers(users);
console.log("Valid Users Ids:", validUsers);