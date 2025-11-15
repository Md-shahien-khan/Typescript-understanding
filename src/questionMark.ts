// ternary, nullish coalescing & optional chaining

// ? : ternary operator : decision making
// ?? : nullish coalescing operator null or undefined
// ?. optional chaining 

const areYouOver18 = (age : number) =>{
    // if(age >= 18){
    //     console.log("You are over 18");
    // }
    // else{
    //     console.log("You are under 18");
    // }

    // ternary 
    const result = age >= 18 ? "youre 18" : "You're under 18"
    console.log(result)
};

// areYouOver18(11);



// nullish for null or undefined
const userTheme = undefined; //if there is string then it will show as a string
const selectedTheme = userTheme ?? "lighting theme"
// console.log(selectedTheme)


// const isAuthenticated = null;
const isAuthenticated = '';   //{ resultWithNullish: '' } { resultWithTernary: 'you are guest' } if u put empty string nullish wont work

const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest"
const resultWithNullish = isAuthenticated ?? "you re a guest";

// console.log({resultWithNullish}, {resultWithTernary});



// optional Chaining 
const user : {
    address : {
        city : string;
        town : string;
        postalCode?: string
    }
} = {
    address : {
        city : "Dhaka",
        town : "Banani"
    }
}
const postalCode = user?.address?.postalCode;
console.log(postalCode); 

