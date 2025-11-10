// function
// Array function, normal function

function add (num1 : number, num2 : number) : Number{ //implicity way they will add any type
    return num1 + num2
}
add(2 , 2);

// arrow. function
const add2 = (number1 : number, number2 : number) : number => number1 + number2;
add2(30, 23);




// method
// const calculator: {
//   add: (a: number, b: number) => number
// } = {
//   add: (a, b) => {
//     return a + b;
//   }
// };

// console.log(calculator.add(10, 20)); // 30

// object => function => method
const user3 ={
    name : "shawon",
    balance : 0,
    addBalance(value : number) : number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
} ;
user3.addBalance(10000);





// loop function/ call back function

const arr : number[] = [1, 4, 6];
const sqrArray = arr.map((element : number) : number => element * element);
