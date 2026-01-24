//new method called rduce , mostly used for shopping cart

const nums=[1,2,3,4,5,6,7,8,9,10]
const numums_new=nums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0)
console.log(numums_new);
//basically it is subtotaling all element in arrray as in shopping cart
///lets write in arrow funcx

const nums1=nums.reduce((acc,curr)=>acc+curr,0)
console.log(nums1);
//practical example

const cart = [
    {
        itemname:"JS course",
        price:2999
    },
    {
        itemname:"Mobile",
        price:4999
    },
    {
        itemname:"WEB DEV course",
        price:199
    },
    {
        itemname:"Dev OOPS",
        price:2932
    },
    {
        itemname:"DeskTop",
        price:29999
    },
    {
        itemname:"JS Node",
        price:6789
    },
]


const net_cart=cart.reduce((acc,item)=>acc+item.price,0)
console.log(net_cart);
