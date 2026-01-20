//single ton object means ek hi tarah ka object
//object literals
//empty object{},type of key value pair
const mysym = Symbol("key")//here we have declared  a unique symbol mysym type,so we have delcared a object of type mysym inside jsuser
const jsuser={
    name:"Hitesh",
    age:18,
    location:"mzn",
    email:"hitesh@google.com",
    islogged:false,
    [mysym]:"mykey1",//key of symbol type is defined in [] inside a object ,remebr imp point,otherwise it will refer to a simple keyword like name,email
    lastloginday:["sunday","saturday"],
    "Fulln":"Billlu",
    //varr:"Unchange"

}
//how to access object
console.log(jsuser.name)
console.log(jsuser["Fulln"])
console.log(typeof(jsuser[mysym]))
console.log(jsuser[mysym]);//to access the element inside the key of type symbol mysym with the help of [].....Syntax declaration
//how to change value of objest 
jsuser.email="billu@agmail.com"
//if you want to lock the value use freeze function
//Object.freeze(jsuser)//whole object is freezed now,no change can be made and Object.freeze(jsuser.email) is invalid alone attribute cannot be freezed
jsuser.email="jhh"
console.log(jsuser);
//now assume if you decale the key inside object of symbol type mysym without [] it will directly reflect in your output


console.log("-===================================================")
//Key is delared as string but we do not write it like a key,but if so then only and only way to access that key is using rect.braket


jsuser.greeting = function(){
    console.log("Hello! JS User");
    
}

console.log(jsuser.greeting())
// we are unfreezing here to declare function

jsuser.greeting2 = function(){
    console.log(`Hello Js Pajjji,${this.name}`);
}
console.log(jsuser.greeting2())
//most of the time value of the function is acces by . operator but in special memebr such as Symbol,or key as string we have to use [] 