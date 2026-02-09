const user = {
    username:"Hitesh",
    login_count:8,
    islogged:true,
    getuserdetails:function(){
        console.log("Got user details")
        console.log(`username:${this.username}`)
        //this.username refer to current context so that it can get context which username to get
    }
}
// console.log(user);
// console.log(user.getuserdetails());
//this new is constructor function

function User(username,login_count,islogged){
    this.username = username;
    this.login_count=login_count
    this.islogged=islogged
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    //return this;

};
//by adding new code we get a acttual New instance of fx/class
const user_one = new User("Hitesh",12,true)
const user_two = new User("Yash",23,false)
//console.log(user_one);
//console.log(user_two);
console.log(user_two.constructor);

