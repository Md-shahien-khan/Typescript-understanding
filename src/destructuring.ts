// Destructuring in typescript
const user = {
    id : 123,
    name : {
        firstName : "Md",
        middleName : "Khan",
        lastName : "Shawon"
    },
    gender : "Male",
    favouriteColor : "Black"
}

// const myFavColor = user.favouriteColor;
// const myMiddleName = user.name.middleName;

// destructuing 
// const {favouriteColor} = user; u can use this way as well

// u can put inside a name
// name alias
const {favouriteColor : myFavColor, name : {middleName : myMiddleName} } = user;
// console.log(myFavColor, myMiddleName);


// Array Destructuring
const friends = ["karin", "Rahim", "Mahim"];
const bestFriend = friends[2];
// console.log(bestFriend);

// destructuring 
// const [a, besie, c] = friends;
// lets say you want to skip that called skipping
const [, besie, c] = friends;
console.log(c);