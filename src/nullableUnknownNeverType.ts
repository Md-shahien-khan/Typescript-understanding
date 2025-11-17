// nullable, unknown & never type

const getUser = (input : string | null) =>{
    if(input){
        console.log(`from db : ${input}`);
    }
    else{
        console.log("from db all user")
    }
};
// getUser("shawon")


// nullable type
// getUser(null); // if u just put null it wont work u have to mention that. next to input like input | null

// unknown type

const discountCalc = (input : unknown )=>{
    if(typeof input === 'number'){
        const discountPrice = input * 0.1;
        console.log(discountPrice)
    } 
    else if(typeof input === 'string'){
        const [discountedPrice0Index] = input.split(' ');
        console.log(Number(discountedPrice0Index) * 0.1) 
    }
    else{
        console.log("wrong input");
    }

}
discountCalc(100);
discountCalc("100 Taka");
discountCalc(null);

// if u want to know that what will come at run time so use unknwon


// void
const throwError = (msg : string) : never=>{
    throw new Error(msg);
}

throwError('Error....')