//primitve
// 7 types: String,Number,Boolean,Null,Undefined,Symbol,BigtInt

//Refrence type Datatype or non primitive
//Array,Object,functions
/*sometimes interview ask what type of language it is Static aur Dynamics
a language in which need to define datatypes and all is a static but in js no need
 to define datatype and sometimes no need to give value so it is as dynamic*/
 const score= 100
 const scorevalue=100.3
 const isloggesin = false
 const outsidetemp=null
 let useremail;
 //or
 let useremail1=undefined
 const id=Symbol('123')
 const id2=Symbol('123')
 console.log(typeof(id))
 console.log(id==id2)
 //use 'n' in the last of number to make it big int
 const heros=["Shaktiman","Doga","Naagraj"]

 let myobj={
    name:"yash",
    age:22
 }
const myfunction=function(){
    console.log("Hello World");

}

console.log(typeof myfunction);
//null ka type of object hota hai
