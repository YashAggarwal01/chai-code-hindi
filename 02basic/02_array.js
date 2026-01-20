const marvel_heros=['marvelma','ironman','spiderman']
const dc = ['superman','flash','batman']

//marvel_heros.push(dc)
//console.log(marvel_heros);//When we do push in a array it consider it as a single object ,DC here considered as a single onject
//push made change in original array 

const allhero=marvel_heros.concat(dc)//woking of concat is also same as push but retruna a new arrya,older array remains untouched

console.log(allhero);

//we have also one more option SPREAD

const newhero1=[...marvel_heros,...dc]//more realiable method to join two array,return a new array
console.log(newhero1)
const complex_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]//this type of array is very rare only for knowledge , we uise a function that will flat this array and concat alls ub array into a new array,older is untouched
const new_complex=complex_arr.flat(Infinity);//In the argument we pass the how much dept we required to flat , Infinity means it will flat all


console.log(new_complex);

console.log(Array.isArray("Hitesh"))//will chechk incoming data frofm web for a array
console.log(Array.from("Hitesh"))//convert into array

let score1=100
let score2=300
let score=768
console.log(Array.of(score1,score2,score))//will combine all element/object and return new array