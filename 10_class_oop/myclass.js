// //we learing java afetr ES^6

// class user {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encrypt_password(){
//         return `${this.password}abc`
//     }
//     change_username(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const chai = new user("chia","gpt@chi","123")
// console.log(chai.encrypt_password());
// console.log(chai.change_username());

// behind the scene

function user(username,email,password){
    this.username=username,
    this.email=email,
    this.password=password
};


user.prototype.encrypt_password = function(){
    return `${this.password}abc`
}
user.prototype.change_username = function(){
    return`${this.username.toUpperCase()}`
}

const tchai = new user("thia","tpt@chi","1t23")
console.log(tchai.encrypt_password());
console.log(tchai.change_username());

