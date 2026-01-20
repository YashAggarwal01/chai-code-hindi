const gamename = new String('Yash Aggarwal')
console.log(gamename.length)
//string has a lot of  function many of them are not used even in life but they ecist
console.log(gamename.toUpperCase())
const newname=gamename.toUpperCase()
console.log(typeof(newname))

console.log(gamename.charAt(2))//here we give index to retirev element at that index
//to do vice versa,means to get index of desired char,use index of
console.log(gamename.indexOf('y'))

//Go thorigh all string methods,on 

const newstr=gamename.substring(0,9)//Slicing like python,index xtatr form zero
console.log(newstr)

const eptystring="    aysh        "
console.log(eptystring)
console.log(eptystring.trim())//removes space from front and back we also have trimstart and trim end to remove space from only start and back
const url="https://hitesh.com/hitesh%20choudhary"//brouser ko <space> nhi smjhta,vo % se replace ho jata hai
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(url.split('-'))