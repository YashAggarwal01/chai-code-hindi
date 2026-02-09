function set_name(username){
    this.username = username
}

function createuser(username,email,password){
    set_name(username)
    this.email = email
    this.password = password
}

const chai = new createuser("Chai","billu@cillu","123")
console.log(chai)
//It's output createuser { email: 'billu@cillu', password: '123' }
//consider it here we use crateuser function to create a function and inside it we call set_name(),that means create user should
//call set_name and the final result should be createuser { username:"Chai" , email: 'billu@cillu', password: '123' }
//but this does not happen here
//if we put a console log inside the set_name we get to know that the function in actual is called by crateuser but in actual is not userfull\
//why? let C=>
//as the callstack create it remove the exe. context of called function so we use a .call method to hold out its varialble and contxt

function new_createuser(username,email,password){
    set_name.call(this,username)
    this.email = email
    this.password = password
}
const new_chai = new new_createuser("Chai","billu@cillu","123")
console.log(new_chai)