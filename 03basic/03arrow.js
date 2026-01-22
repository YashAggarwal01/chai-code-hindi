// const user={
//     username:"Hitesh",
//     price:99,
//     wecomemessage: function(){
//         console.log(`${this.username},Welcome to Website`);
//         console.log(this)
//     }

// }
// user.wecomemessage()
// user.username="Sam"
// user.price=988
// console.log(this)//This alwasy refer to corrunt context,this inside the function refer to whole funnction and all the current variable but when we
//when we consolelog the "this" outisde the function it refer to empty {} means empty corrent context
//browser ke ander windows ek global object hai

function chai(){
    let usename="Hitesh"
    console.log(this.username);

}
//this only work for object not in usual function
chai()

const chaii  = function(){
    let username="Billu"
    console.log(this.username)
}

chaii()//similar for the above

const chaiii = () => {
    let name="Yash"
    console.log(this.name)
}
chaiii()
//still it comes undefined with this.name but what if we print only this
const chaiiii = () => {
    let name="Yash"
    console.log(this)
}
chaiiii()//with arrow function when we log to "this",we got an empty {} this is the diffrence between 

//Pure arrow function
//syntax
//()=>{}
    const addval=(num1,num2)=>{
        return num1+num2
    }
    console.log(addval(5,4))

    //basaic arrow functon
//another type of arrow function,implicit return

const addnum = (numa,numb)=>numa+numb//Implicit Return 
//if we dont have {} and want to retrun object,so there no way to return this way.......Object need explicit return

const myarr=[1.34,4,67,4,2]



