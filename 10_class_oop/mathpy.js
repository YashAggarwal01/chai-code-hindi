const disp = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Math.floor(Math.PI))
console.log(disp);

const chai = {
    name:"Ginger Chai",
    price:250,
    isAvail:true,
    orderchai: function(){
        console.log("chai npot ready")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false

})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [key,value] of Object.entries(chai)){
    if(typeof value!=='function'){
        console.log(`${key};${value}`)
    }
}

