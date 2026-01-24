const coding=["js","python","cpp","c","ruby"]
//what will happen if we store item of for each loop in a variable 
const vall=coding.forEach((item)=>{
    console.log(item);
    
})
console.log(vall);
//nothing will happen it give undefined,as we have to manually return it
const val1=coding.forEach((item)=>{
    //console.log(item);
    return item
    
})
console.log(val1);
//still undefined after manually returning,that means for each does not return values
//But what if we have to apply a operation on element of array


const mynums=[1,2,3,4,5,6,7,8,9,10]
//Filter operaton returns values

const newnums=mynums.filter((item)=>item>5)
console.log(newnums);
console.log(typeof(newnums));
console.log(typeof(mynums));

//Remeber if we are using a big impllimentation of filter then we have to use {},means we opened a scope so we have to manually
//return the vaules. Implicit return ends here as scope is opened
const newnums1=mynums.filter((item)=>{
    return item>3
})
console.log(newnums1);


//what if we have to do it with for each

const updated_num=[]
mynums.forEach((num)=>{
    if(num>4)
        updated_num.push(num)
})

console.log(updated_num);
