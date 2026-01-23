//first loop is for loop as usual programming for loop

const { useEffect } = require("react");

for(let i=0;i<10;i++){
    console.log(i)
};


//if we are itrating over an array and array inedx get out of bound then it will return undefined,it dosent have out of bound error

//Similarly we also have break and continue statement
//we also have while and do while loop

let i =0
while(i<10){
    console.log(i)
    i++;
};





//for of loop(array specific loop)
//we get object in arrray or string in array
console.log("=======================================");

const arry=[1,2,3,4,5]
for (const num of arry) {
    console.log(num);
    
}

const greet="Hello World!"
for (const gret of greet) {
    console.log(gret);
}

//Maps,which holds key value pair and maintain the inserton order.....No duplicates and unique value

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"AMERICA")
map.set('PK',"PAKISTAN")

console.log(map)
//what will happen if we apply for of loop on map

for (const key of map){
    console.log(key)
    
}
// for (const [key,value] of map){
//     console.log(key,value);
    
// }