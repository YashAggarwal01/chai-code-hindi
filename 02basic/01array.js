const myarr = [0,10,2,303,3,]
//read docs from mdn
//javas array are heterogeneous and can be size incresed
//array create shallow copy(share same mem refrence)
const arr1=["billu","tillu"]
const arr2=new Array(1,2,33,4,4)
//array method

arr1.push(7)
arr1.push(67)
console.log(arr1);
arr1.pop()
console.log(arr1);
arr1.unshift(777)//add in the beggning,similar to push pop,we have shift
console.log(arr1);
console.log(arr1.includes(09));//similar we have index of

const arr3=arr1.join()//we get joined aray but arr3 become a string

//slice similar to pyuthon
//splice is diffrent
//what is the diffrence between them ,splice manupulate splice and slice retruns a copy of that section

