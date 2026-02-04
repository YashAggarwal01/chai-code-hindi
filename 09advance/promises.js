//promise are the event that are promised to do but not just ..after sometime they will exe. no time is defined but yes they will definately 
//occur it is a async programming that a event is addded to que

const pro_one = new Promise(function(resolve,reject){
    //the promise object has a fx callback
    setTimeout(function(){
        console.log('async task is done');
        resolve()

    },1000)
})

//as the promise is createdd so it needs to be consumed

pro_one.then(function(){
    console.log("promise consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve")
})//.then(function)


const por_three = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

por_three.then(function(user){
    console.log(user)
})

const pro_four = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"HItesh",password:"123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

pro_four.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("FInally part"))
// const username = pro_four.then().catch((user)=>{
//     console.log(user);
//     return user.username
// })


pro_five = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JAVA SCRIPT",password:"@123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumepro_five(){
    try{
        const response = await pro_five
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consumepro_five()


// async function get_user(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await ṇresponse.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }


// }

// get_user()
//another method

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then(()=>{console.log(data)})
.catch((error)=>console.log(error))
