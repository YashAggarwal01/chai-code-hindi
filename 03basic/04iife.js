//Immediately Invoked Function Expressions(IIFE)

function chai(){
    console.log(`DB connected`)
}

//this is a normal function defination but what if we want to run it instantly for service like management,admin,DB connection
//so here is the solution]

(function adv_chai(){
    console.log(`Fasst DB connected`)
})();

//Inside the() there is function definantion,and last () is actually a function call like an ordinary

//Why to use these iife to avoid pollution of global scope variable/declaration orrr so that function can be work immideatli but first def. is logical


//can we use arrow func....?

( () => {
    console.log(`DB Inilisaed`)
}) ();
//it wont work lets see why..

(function chaiaurcode(){
    console.log(`DB Connected..`)
})();
//here if we write the code again instead of arrow function it wont work again because a IIFE itself dont know where to stop actually ,
// so we need to give a ; explicitly...to stop its executition after it we can use arrow IIFE and Simple IIFe again HeRE


( (name)=> {
    console.log(`DB Connected ${name}`)
})("Hitesh")

