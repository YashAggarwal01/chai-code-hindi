
//syntax  func.namae() scope
function saymyname(){
    console.log("Y")
    console.log("A")
    console.log("S")
    console.log("H")
}

saymyname()
//if we write saymyname without () then nothing will happen because 
// that simply means we are refering it.means we are saying this exist

function add(numa,numb){
    console.log(numa+numb)
}

add(3,5)
//problem arise when we give a number as string in function then the JS itself use his brain and convert both into string
add(3,"5")
//similarly
add(3,"a")//3a
//add(4,a)//error
//add(5,null)//error

//we can also store the reult into a variable

function add1(a,b){
    let res=a+b;
    return res
    //if we write a code after return it will never executed as it retruned
    //another format is directly retrun a+b
}


result=add1(4,5)
console.log(result)
function loginusermessage(username){
    return`${username} just logged in `
}

console.log(loginusermessage("Billu"))
//we do not pass any argument in function then it will get "undefinde ju"st logged in"

function loginusermessage1(username){
    if(username===undefined || !username){
        console.log("Enter a valid Username")
        return
    }
    return`${username} just logged in`
}
//we can also give deafault argument and two method for checking empty input

console.log("===========================================================================")

function cartprice(numb1){
    return numb1;

}
console.log(cartprice(200,400,500));
//we dont know how many args are incoming to calculate the price so we rest and spread method
function cartprice1(...numb1){
    return numb1;

}
console.log(cartprice1(200,400,500));
///... means spread it bsaically add all the agrs into a array

const user={
    usename: "hitesh",
    price:199
}

function handleobject(anyobj){
    console.log(`username is ${anyobj.usename} and price is ${anyobj.price}`)
}

//handleobject(user) this is one of methoda and another is
handleobject({username:"billu",price:90})
const arr=[200,400,500,900]

function returnsecval(arry){
    return arry[1]
}

console.log(returnsecval(arr))//and similarly we can directly pass the array  without creating prior
