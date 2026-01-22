/*let a =10
const b=40
var c=90
*///if we can log to all these then why we use three diffrent,let say we dedclare
var c=300//will create issue as below we decale c also btw this is called global scope and below vala is called local scope

let a=354
if (true){
    let a =10
    const b=40
    var c=90
}
//now if we log these value then they wont because there scope is limited within the block
console.log(a)
//console.log(b)
//console.log(c)
//so basically this scope concept is simply a programming ordinary concept

//Next lecture nested scope
function one(){
    const usename="Billu"
    function two(){
        const website = "youtube"
        console.log(usename);
    }
    //console.log(website);create error as website scope is limited inside two function........Basically a child and function scope relation
    two()
}

one()

if(true){
    const usernaam="hitesh"
    if(!usernaam){
        const website="uutoob"
        console.log(username+website);
    }
    //console.log(website);//similar to above concept

}
//console.log(username)

//============================================================z

function addone(value){//this is a simple function defination
    return value+1;
}

addone(5)

const addtwo = function(num){//this is basically a expression but very very powerfull in JS
    return num+2;
}

addtwo(5)


//the fact is if function is decalred normally so we can call it anywhere before delaration or after declaration but when we define function in 
//expression or store function in variable then only it can be called after declaration,cannot bbe called before