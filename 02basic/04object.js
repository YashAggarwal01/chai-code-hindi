const tinder = new Object()//singlet object
const bumble={}//non singleton object

tinder.id="123abc"
tinder.name="Billu"
tinder.Logged=false
//basis to use for object
console.log(tinder)

const regular_user={
    email:"some@mail.com",
    fullname:{
        userfullname:{
            first:"Hitesh",             //nesting of object is possible as much as needed,nest can be accesed by using . operator
            last:"Jaat"
        }
    }
}
console.log(regular_user.fullname)
console.log(regular_user.fullname.userfullname.first)

const obj1 = {1:"a",2:"c"}
const obj2 = {3:"a",4:"c"}

const obj3={obj1,obj2}
console.log(obj3)//same array problem object in object
const obj4=Object.assign(obj1,obj2)//desired output
//  combine both object into a new object...
// also we can use Object.assign({},obj1,obj2) this empty object will behave as target object that is returned as new
//  otherwise it will target to the first object
console.log(obj4)
//also we have one option similar to array,called speading
console.log("=======================")
const obj5={...obj1,...obj2}
//we can create array of object,used when data is retrived from DB
const users = [
    {
        id:1,
        email:"bill@gmail.com"
    },
    {
        id:2,
        email:"gill@gmail.com"
    },
]
//how to access?
console.log(users[1].email)//accesing first index member, remeber indexing start from zero that means accesing second menber
console.log(Object.keys(tinder))//accesing keys of a object will retrun a array that can be accesed by loop
console.log(Object.values(tinder))//return array of values,similar to keys
console.log(Object.entries(tinder))//will rerurn a array of array, it will make each entry a array and combine those array into a single array,...this method isi rarely used
//Class 3 obejct,deconstruct

const course ={
    cousename:"JS in hindi",
    price:"999",
    courseinstructor:"Hitesh"
}

//course.courseinstructor
const {courseinstructor}=course

console.log(courseinstructor)
//as it is very long so we can define our own keyword

const {courseinstructor: ins}=course
console.log(ins)
//this is called de structuring,we can do array too
//API start

/*Below this a method of NodeJS
{
    name:"hitesh",
    coursename:"js in hindi",
    fee:"free"
}
API also get in form of array*/

