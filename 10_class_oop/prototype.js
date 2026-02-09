let myname = "hitesh"
console.log(myname.length)
//here i know my length is 6 here but what if
let myname_="hitesh        "
console.log(myname_.truelength)
//we can also do this in a way
console.log(myname_.trim().length)//this is a low IQ approach

let my_hero =["thar","scoprio"]//array
let hero_power = {
    thar:"4x4",
    scorpio:"sling",
    getScorpiopower : function(){
        console.log(`Spidy power is 4X4X4 ${this.scorpio}`)
    }
}
//object
//so here we dont have a by default method inside its prototype but we can manually inject a prototype method
Object.prototype.hitesh = function(){
    console.log(`hitesh presnt in all object`);
    
}//the prototype of object,hitesh is injected in proto if all object

hero_power.hitesh()
//we say that array is also a type of object so this hitesh proto shouhld also present in proto of array

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}


my_hero.heyHitesh()

//it works perfectly but what will happen if we try to acces a method that is present in proto of object/array through a object/aray
//then obv it will create a error as these are not present in those proto


const Teacher = {
    makeVideo:true
}
const Teach_support = {
    isavailble: false
}
const TA_supp = {
    fulltime:true,
    assignment:"JS assignment",
    __proto__:Teach_support//old method
}

//Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(Teach_support,Teacher)
console.log("========================================================")
//Now lets assume we have a method a #truelength in string but i want to access in the array so here is the magic


let anotherUsename="Chai aur code"
String.prototype.truelength = function(name){
    console.log(`${this}`)
    console.log(`${this.name}`)
   // console.log
}

anotherUsename.truelength()