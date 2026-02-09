class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends user {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }


}


const yash = new Teacher("yash","yash@mail","123")
// console.log(yash)
yash.addCourse()

const billu = new user("Masala Chai")
//billu.addCourse()
billu.logMe()

console.log(yash===billu)
console.log(yash===Teacher)
console.log(yash instanceof Teacher)