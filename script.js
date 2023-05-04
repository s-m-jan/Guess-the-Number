let enterBtn = document.querySelector("#enter-number-btn");
let forsatDiv = document.querySelector(".forsat");
let startMsg = document.querySelector("#start-message");
let guessNum = document.querySelector("#guess-num");
let leftGuess = document.querySelector("#left-guess");
let secretItem = document.querySelector("input");
let leftNumber = document.querySelector("#left-number")
let inputItem = document.createElement("input")
inputItem.type = "text";
let guessBtn = document.createElement("button");
guessBtn.innerText = "guess"
let guessContent = document.querySelector("#guess-content");
let guessForm = document.querySelector("#guess-form");
let Winner = document.querySelector("#win");
let loser = document.querySelector("#lose");

console.log(guessForm.children)

let clickedNum = 0;
let startNum = 10;
let leftToClick;
let receivedNum;

enterBtn.addEventListener("click", (e)=>{
    clickedNum++
    receivedNum = secretItem.value;
    console.log(receivedNum)
    leftToClick = startNum - clickedNum;
    forsatDiv.style.display = "block"
    leftGuess.style.display = "block"
    startMsg.style.display = "none"
    guessNum.textContent =  leftToClick;
    guessForm.removeChild(secretItem);
    guessForm.removeChild(enterBtn);
    guessForm.appendChild(inputItem);
    guessForm.appendChild(guessBtn)
})

guessBtn.addEventListener("click", (e)=>{
    if(inputItem.value === receivedNum){
        forsatDiv.style.display = "none";
        guessForm.style.display = "none";
        leftGuess.style.display = "none";
        Winner.style.display = "block";

    }else if(inputItem.value> receivedNum){
        guessContent.innerHTML += `<span class="blue"> ${inputItem.value}</span>`
        inputItem.value= "";
        inputItem.focus();
    }else{
        guessContent.innerHTML += `<span class="red"> ${inputItem.value}</span>`
        inputItem.value= "";
        inputItem.focus();
    }

    if(leftToClick > 0){
        leftToClick--
        guessNum.textContent =  leftToClick;
    }else{
        forsatDiv.style.display = "none";
        guessForm.style.display = "none";
        leftGuess.style.display = "none";
        loser.style.display = "block"
    }
})