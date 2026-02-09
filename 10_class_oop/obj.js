function multi_by_5(num){
    return 5*num
}
//kya function bhi ek object hai , yeh neeche vali cheez .power or .somthing is only aplicable to ojbects

multi_by_5.power = 2
//lets figure out this
console.log(multi_by_5(5))
console.log(multi_by_5.power)
console.log(multi_by_5.prototype)
//hence it is also called a object but its proto is null
 
function create_user(name,score) {
    this.name= name
    this.score=score


}

create_user.prototype.increment = function(){
    this.score++;
}


// const chai = create_user("chai",25)
// const Tea = create_user("Tea",250)
// console.log(chai);
// console.log(Tea);
const chai = new create_user("chai",25)
const Tea = new create_user("Tea",250)
console.log(chai);
console.log(Tea);


create_user.prototype.printMe = function(){
    console.log(`Scroe is ${this.score}`)
}

chai.printMe()//this cannot read property of undefined


//the whole thing is we havent used "new" keyword here so add new keywaord to create_user then it will work

//so we can basicaaly add a method to a function using prototype 
//