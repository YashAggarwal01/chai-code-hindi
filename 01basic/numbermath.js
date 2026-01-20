//part 2 maths
const score = 400
const balance = new Number(200.86)
console.log(balance)
console.log(typeof(score))//as compare to strings we have less method in maths/numbers/integer
console.log(balance.toString().length)
console.log(balance.toFixed(2))//to fixed is used to trim oyt the decimals so easy calc, like in ecommerce to calculate bills
const newnum=2679.34567
console.log(newnum.toPrecision(3))//priority is given to before decimal
const hundreds =100000000
console.log(hundreds.toLocaleString('en-IN'))//to change into standards IN for india,standard is us america
//has multiple methods for calculation and better maths
console.log("+===========================================================================================")
//part 2 maths

console.log(Math)//it is a bydefault inbuild library in JS,
console.log(Math.abs(-5))//negative become positive,positive remains positive
console.log(Math.round(5.68))//will round off,we have chocice to Math.ceil,Math.floor
console.log(Math.ceil(5.68))
console.log(Math.floor(5.68))
//where it is used and why is is used most,
//it is used in Math.random to get the ramdom value only between 0-1
//to get random value in diffrent range we use multiplication or desired function
console.log(Math.floor(Math.random()*10) + 1)
const min = 10
const max =20
console.log(Math.floor(Math.random() * (max-min+1)) + min)//evalutaiton to get value between range