// Type Alias

// type User = {
//     id : number,
//     name : {
//         firstName : string,
//         lastName : string
//     },
//     gender : "Male" | "Female",
//     contactNo : string,
//     address : {
//         division : string,
//         city : string
//     }
// }

// const user1 : User = {
//     id: 12,
//     name : {
//         firstName : "Md",
//         lastName : "Khan"
//     },
//     gender : 'Male',
//     contactNo : "012313",
//     address : {
//         division : "Banani",
//         city : "Dhaka"
//     }
// };






// If we write like this we have to wrtie continiously in same way for every user
// const user1 : {
//     id : number,
//     name : {
//         firstName : string,
//         lastName : string
//     },
//     gender : "Male" | "Female",
//     contactNo : string,
//     address : {
//         division : string,
//         city : string
//     }
// } = {
//     id: 12,
//     name : {
//         firstName : "Md",
//         lastName : "Khan"
//     },
//     gender : 'Male',
//     contactNo : "012313",
//     address : {
//         division : "Banani",
//         city : "Dhaka"
//     }
// };

// // user 2

// const user2 : {
//     id : number,
//     name : {
//         firstName : string,
//         lastName : string
//     },
//     gender : "Male" | "Female",
//     contactNo : string,
//     address : {
//         division : string,
//         city : string
//     }
// } = {
//     id: 12,
//     name : {
//         firstName : "kanij",
//         lastName : "fatema"
//     },
//     gender : 'Female',
//     contactNo : "012313",
//     address : {
//         division : "Banani",
//         city : "Dhaka"
//     }
// };




// After using type alias
type User = {
    id : number,
    name : {
        firstName : string,
        lastName : string
    },
    gender : "Male" | "Female",
    contactNo : string,
    address : {
        division : string,
        city : string
    }
}

const user1 : User = {
    id: 12,
    name : {
        firstName : "Md",
        lastName : "Khan"
    },
    gender : 'Male',
    contactNo : "012313",
    address : {
        division : "Banani",
        city : "Dhaka"
    }
};

const user2 : User = {
    id: 12,
    name : {
        firstName : "kanij",  
        lastName : "fatema"
    },
    gender : 'Female',
    contactNo : "012313",
    address : {
        division : "Banani",
        city : "Dhaka"
    }
};

type Name = string;
const theName : Name = "Mr. Sujon";



// for function

type AddFunction = (num1 : number, num2 : number) => number
const add : AddFunction = (num1, num2) => num1 + num2;