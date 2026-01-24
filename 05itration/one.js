//first loop is for loop as usual programming for loop



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

//Maps,which holds key value pair and maintain the inserton order.....No duplicates and unique value...Main point map is not itratable

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"AMERICA")
map.set('PK',"PAKISTAN")

console.log(map)
//what will happen if we apply for of loop on map

for (const key of map){
    console.log(key)
    
}
//for distinct key and value,basically destructing the map into array
for (const [key,value] of map){
    console.log(key,"->",value);
    
}

const myobj={
    'gmae1':'NFS',
    'game2':'Spiderman'
}

// for( const [key,value] of myobj){
//     console.log(key,"->",value);   
// }//will cause error as object is not itratable in this for of loop

//similarly we can itrate over a string
 console.log("=======================================");
const myobj1={
    js:'javascript',
    cpp:'c plus plus',
    rb:"ruby",
    swift:"by apple"
};

for (const key in myobj1) {
    console.log(key);//only for showing keys
    console.log(myobj1[key]);//for showing value assigned to key
    console.log(`${key} shortcut is for ${myobj1[key]}`)
    
    
    
}
 console.log("=======================================");
 console.log("=======================================");


 const arry1=["js","cpp","c"]
 for (const key in arry1) {
    
    console.log(arry1[key]);
    
    
 }