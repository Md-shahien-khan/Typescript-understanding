// non primitve
// array, object

let groceryList = ["Eggs", "Milk", "Bread"]
// groceryList.push(true);Argument of type 'boolean' is not assignable to parameter of type 'string'.ts(2345)

// let mixedArray = ['Eggs', 12, "Milk", 3, "Bread", 2]; 'mixedArray' is declared but its value is never read.ts(6133)
// let mixedArray: (string | number)[]


// or we can mention
let mixedArray : (string | number) [] = ['Eggs', 12, "Milk", 3, "Bread", 2];
// mixedArray.push(" i can send number/ string but not other things")
// mixedArray.push(12)


// Tuple data
/**
 * let user: [number, string];

// Assigning values
user = [1, "Alice"]; // ✅ Correct
user = ["Alice", 1]; // ❌ Error: order and type mismatch
user = [1, "Alice", true]; // ❌ Error: too many elements
 * */ 

// let couple : [string, string] = ["husband", "wife"]; since you put two string has to be string not number
let destination : [string, string, number] = ["Dhaka", "London", 3];


// reference type

// const user = {
//     firstName : "Md",
//     middleName : "Khan",
//     lastName : "Shawon" 
// }

// const user: { typescript will automatically show u the type still u can mention
    // firstName: string;
    // middleName: string;
    // lastName: string;
// }

const user : {
    firstName : string,
    // firstName : "mohammed" //literal type
    // middleName : string,
    middleName? : string,   // optional type, some people will have the middle name some people dont.
    readonly lastName : string,
    isMarried : boolean
} = {
    firstName : "Md",
    middleName : "Khan",
    lastName : "Shawon",
    isMarried : true 
}
// user. if u press it will show u the items/ property u have in user 

user.firstName = "Mohammed" // you can replace
// and if u want to keep it unchangable  then put firstnmae = "shawon " then no can change

// user.lastName = "badhon" 
// Cannot assign to 'lastName' because it is a read-only property.
// console.log(user);
