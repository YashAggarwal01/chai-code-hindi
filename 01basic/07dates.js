//date is a onject a
let mydate = new Date()
console.log(mydate)
console.log(mydate.toDateString())
console.log(typeof(mydate))
let customdate= new Date(2023,01,01)//custom datae,format 1
let customdate1= new Date(2023,01,01,5,6,7)//custom datae,format 1
console.log(customdate.toDateString())//In java script months start from 0.means 0 means january,1 means feburary
console.log(customdate1.toLocaleString())
let mytimestamp=Date.now()//will give milliseconds from std time
console.log(mytimestamp)
console.log(Math.floor(Date.now()/1000));

console.log("=====================================")

//extractino from date
let date1= new Date()
console.log(date1)
console.log(date1.getMonth()+1);
console.log(date1.getDay());

date1.toLocaleString('default',{
    weekday:"long",
    timeZone: ""
})