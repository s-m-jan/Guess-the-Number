let forsatDiv = document.querySelector(".forsat");
let guessNum = document.querySelector("#guess-num");
let guessForm = document.querySelector("#guess-form");
let startMsg = document.querySelector("#start-message");
let inputItem = document.createElement("input")
let enterBtn = document.querySelector("#enter-number-btn");
let leftGuess = document.querySelector("#left-guess");
let secretItem = document.querySelector("#secret");
let leftNumber = document.querySelector("#left-number")
inputItem.type = "text";
let guessBtn = document.createElement("button");
guessBtn.innerText = "guess"
let guessContent = document.querySelector("#guess-content");
let Winner = document.querySelector("#win");
let loser = document.querySelector("#lose");



// let clickedNum = 0;
// let startNum = 10;
let leftToClick;
let receivedNum;

enterBtn.addEventListener("click", (e)=>{
    // clickedNum++
    receivedNum = secretItem.value;
    // console.log(receivedNum)
    leftToClick = Math.floor(Math.log2(receivedNum) + 1)
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
        guessContent.innerHTML += `<span class="red"> ${inputItem.value}</span>`
        inputItem.value= "";
        inputItem.focus();
    }else{
        guessContent.innerHTML += `<span class="blue"> ${inputItem.value}</span>`
        inputItem.value= "";
        inputItem.focus();
    }

    if(leftToClick > 1){
        leftToClick--
        guessNum.textContent =  leftToClick;
    }else{
        forsatDiv.style.display = "none";
        guessForm.style.display = "none";
        leftGuess.style.display = "none";
        loser.style.display = "block"
    }
})