const num = [1,2,3,4,5,6,7,8,9,10]
//map automaticallay return values
const newnum=num.map((in_val)=>in_val+10)
console.log(newnum);
//similarly if we uses an scope here then return value manually\

//we can apply a map after a map also filter map().map().filter()--------.this comcept is called Chaining and we can do it as much we want
const nums1=num.map((in_val)=>in_val*10).map((inp)=>inp+1)
const nums2=num.map((in_val)=>in_val*10).map((inp)=>inp+1).filter((in_val)=>in_val>30)
console.log(nums1);
console.log(nums2);
