let flagsAndCountry={}
let newFlag;
let count=0
function setUpFlags(){ 
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {

        for(let i=0; i<data.length;i++){
            let flag = data[i].flags.png
            let country =data[i].name.common

            flagsAndCountry[flag] = country
        }
        console.log(flagsAndCountry)
        getRandomCountry()
    })
}
function getRandomCountry(){
    const keys = Object.keys(flagsAndCountry);
        newFlag= keys[Math.floor(Math.random() * keys.length)];
        document.getElementById("flag").src=newFlag
} 
function compareUserInput(){
        let userInput = (document.getElementById("country").value).toLowerCase()

        let answer = (flagsAndCountry[newFlag]).toLowerCase()

        let isCorrect = userInput ==answer
 
        console.log(userInput,answer,userInput == answer)

        let correct=document.querySelector(".correct")
        let score = document.querySelector(".score")
    if(isCorrect){
        getRandomCountry()
        document.getElementById("country").value = ""
        count++
        score.innerHTML=`<h4>score : ${count}</h4>`
    }
    else {
        getRandomCountry()
        correct.innerHTML = `<button<h5>correct answer:</h5> ${answer}</button>`
    }
}
setUpFlags()

let time = 60;
var timer = setInterval(function () {
    time--;
    document.getElementById("timecount").innerHTML = `<h4> time: ${time}</h4>`;
    if (time <= 0){
    document.getElementById("timecount").innerHTML = `<h4> time is up!</h4>`;
    
    document.querySelector(".form").innerHTML= `<h3>game is over!</h3>`
}
}, 1000);

