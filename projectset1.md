# Projects related to marked DOM

## Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(evn){
    console.log(evn)
    console.log(evn.target)
    if(evn.target.id==='grey'){
      body.style.backgroundColor=evn.target.id
    }
    else if(evn.target.id==='yellow'){
      body.style.backgroundColor=evn.target.id
    }
    else if(evn.target.id==='white'){
      body.style.backgroundColor=evn.target.id
    }
    else if(evn.target.id==='blue'){
      body.style.backgroundColor=evn.target.id
    }
  })
})


```

## Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (evn) {
  evn.preventDefault();
  const hght = parseInt(document.querySelector('#height').value);
  const wght = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (hght === '' || hght < 0 || isNaN(hght)) {
    result.innerHTML = `Please Give a Valid Height!!${hght}`;
  } else if (wght === '' || wght < 0 || isNaN(wght)) {
    result.innerHTML = `Please Give a Valid Weight!!${wght}`;
  } else {
    const BMI = (wght / ((hght * hght) / 10000)).toFixed(2);
    result.innerHTML = `<span>${BMI}</span>`;
  }
});
```

## Project 3

```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleDateString());
  clock.innerHTML = date.toLocaleDateString();
},1000)
```

## Project 4
```javascript
let rnum = (parseInt(Math.random()*100+1))
console.log(rnum)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remain = document.querySelector('.lastResult');
const LH = document.querySelector('.abc');
const start_over= document.querySelector('.resultParas');

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playgame = true


if(playgame){
  submit.addEventListener('click',function(evn){
    evn.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enetr a Valid Number')
  }else if(guess <1 || guess >100){
    alert('Enter in a Range 1-100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMSG(`Game Over Ranmdom Number was ${rnum}`)
      EndGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}
function checkGuess(guess){
  if(guess === rnum){
    displayGuess(`You Guessed it Right`)
    EndGame()

  }else if(guess < rnum){
    displayMSG("Number is Too Low")
  }else if(guess>rnum){
    displayMSG("Number is TOO High")
  }
}

function displayMSG(message){
  LH.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(message){
  userInput.value=''
  guessSlot.innerHTML+=`${message} `
  numGuess++;
  remain.innerHTML=`${11-numGuess}`
  // if(remain.innerHTML===0){
  //   EndGame()
  // }

}

function newGame(){
  const newgamebutton = document.querySelector('#newGame')
  newgamebutton.addEventListener('click',function(evn){
    rnum = (parseInt(Math.random()*100+1))
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML=''
    remain.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    start_over.removeChild(p)
    playgame=true
  })

}

function EndGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
  start_over.appendChild(p)
  playgame=false;
  newGame()
}
```

## Project 5(BG-Color)(BYc&c)
```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

## Project 5(BG-Color)(BY me)
```javascript
  const event = document.querySelector("#std")
    const body = document.querySelector('body')
    const heading=document.querySelector("#hd")

    let get_num = function(){
        return Math.floor(Math.random() * 256);
    }
    let bg_change;
    document.querySelector('#start').addEventListener('click',function(){
        event.innerHTML = "Started"
        bg_change=setInterval(function(){
            r_val=get_num()
            g_val=get_num()
            b_val=get_num()
            body.style.backgroundColor = `rgb(${r_val},${g_val},${b_val})`
            heading.style.color =`rgb(${b_val},${r_val},${g_val})`
            
        },1000x)
        
    })
    document.querySelector('#stop').addEventListener('click',function(){
        
        clearInterval(bg_change)
        event.innerHTML = "Stopped"
    })
}```