// we have some statement are considered as they are true or sometimes as false but in acual we dont give them a true or a false value

//here  consider a variable 
const user = "Yash"
if(user){
    console.log("Welcome user1");
}
else{
    console.log("User not exist");
    
}

//Here we give a string to user but do not dce;are as true or false but by default JS consider it as true because it assume it will be true if it holds some of value
//lets say if we give an empty string to user then it will consider it as false
const user2 = ""
if(user2){
    console.log("Welcome user2");
}
else{
    console.log("User not exist");
    
}

//Means it uis true if string hold some valur and false if string is empty
//what if it we give an empty array
const user3 = []
if(user3){
    console.log("Welcome user3");
}
else{
    console.log("User not exist");
    
}

//True Value=all other value other than false
//False Value=fasle,0,-0,BigInt,"",null,undefined,NaN
//True Value="0",'fasle'," ",[],{},function
//fasle==0->true
//false==''->true
//0==''->true


//A speacial type of operator "Nullish Coalescing Operator (??)" for null , undefined

let val;
//val=5??10 will assign 5
//val=null??10 will assign 10
//val=undefined??10 will assign 10
//val=5??10??20 -> will assing 10
console.log(val)
//it is usualyy for safety check

//another operator is ternary operator

const iceteaprice = 100
iceteaprice>=80?console.log("Buyy it"):console.log("Don't Buyy");

