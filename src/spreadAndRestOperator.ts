const friends = ["Anan", "Zarif", "zohaib"];

const schoolFriends = ["Iram", "taswer", "sakif", "badhon"];

const universityFriends = ["Jami", "sajjad", "tina", "gull"];

const spreadOperator = friends.push(...schoolFriends);

// console.log(friends);


// for object 
const user = { name : "Shawon", phoneNo : "+0759321324145"};
const otherInfo = {hubby : "sports", favouriteColor : "black"};

const userInfo = {...user, ...otherInfo};
console.log(userInfo); 
// { my output
//   name: 'Shawon',
//   phoneNo: '+0759321324145',
//   hubby: 'sports',
//   favouriteColor: 'black'
// }





// Rest operator
const sendInvite = (...friends : string[]) =>{
    friends.forEach((friend : string) =>{
        console.log(`sent invitation to ${friend}`)
    })
}
sendInvite("shawon", "kanij", "zohaib", "doaln", "kasun");
// output
// sent invitation to shawon
// sent invitation to kanij
// sent invitation to zohaib
// sent invitation to doaln
// sent invitation to kasun