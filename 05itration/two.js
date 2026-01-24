const coding=["js","python","cpp","c","ruby"]
//a speacial type of loop applied on loop
//a callback function doesn't have any name

coding.forEach( function(item) {
    item=item+"billu"
    console.log(item);

})  


coding.forEach( (item) => {

})


//for each loop me function ka refrence dete hai

function printme(tem){
    console.log(tem);
    
}

coding.forEach(printme)//giving only refrence printme not printme()

//also we have index,array in for each

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

//for each is used mostly when we have objects in array or a array of objects

const arrofobj=[
    {
        langname:"javascript",
        langprice:900
    },
    {
        langname:"nodescript",
        langprice:909
    },
    {
        langname:"nodejs",
        langprice:923
    },

]
//very common opreation as data from DB comes in form of object on array
console.log("==============================================");


arrofobj.forEach((item)=>{
    console.log(item.langname);
    console.log(item.langprice);
    
}
)