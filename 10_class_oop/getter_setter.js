// class user {
//     constructor(email,password){
//         this.email = email,
//         this.password = password
//     }
//     get password(){
//         return this.password.toUpperCase()
//     }
//     set password(value){
//         this.password = value
//     }
// }

// const hitesh = new user("@mail.com","123")
// // console.log(hitesh.password);

//after all this -->RangeError: Maximum call stack size exceeded 
//lets say if i want to give a encrypted password or return a changed value,so we use getter and setter method to secure them
//if we define getter then defingn setter is must
//setter is used to set a value inside a class
//getter is used to get a value outside a class

class user_1 {
    constructor(email,password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const hitesh_1 = new user_1("@mail.com","12gusg3")
console.log(hitesh_1.password);