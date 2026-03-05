const answers = {
    1:'una botella'
}
const riddles={
    1:'Tengo cuello, pero no tengo cabeza. Tengo cuerpo, pero no tengo piernas. ¿Qué soy?'
}
let tries = 3

const submitButton = document.getElementById('submit');
const textField = document.getElementById('user-answer');
const show = document.getElementById('result')
const reset = document.getElementById('changeRiddle')
const riddle = document.getElementById('riddle')
let riddleNum = setRiddleNumber()

riddle.addEventListener('onload', ()=>{
    riddle.innerHTML = `${riddles[1]}`;
})

submitButton.addEventListener('click',() => {

    userAnswer = textField.value.trim()
    console.log('userAnswer');
    console.log(userAnswer);

    if (userAnswer === answer) {
        changeClass('correct');
        showResult('muy bien! has acertado!',
        "https://static.vecteezy.com/system/resources/thumbnails/025/210/762/small/check-mark-icon-transparent-background-checkmark-icon-"+
        "approved-symbol-confirmation-sign-design-elements-checklist-positive-thinking-sign-correct-answer-verified-badge-flat-icon-png.png",
        'imagen de un tic verde');
    } else {
        tries -= 1;
        if (tries <= 0) {
            disableForm()
            changeClass('lose')
            showResult("oh que ultra mal, se te han acabado los intentos y no has descubierto la respuesta :'(<",'redCross.png','imagen de x roja');
            
        } else {
            changeClass('wrong')
            showResult("Oh que mal, no has contestado correctamente :(",'redCross.png','imagen de x roja')
        };
    };
});

reset.addEventListener('click', ()=>{

})

function showResult(message,pathImg,altImg){
    show.innerHTML = `
        <img src="${pathImg}" alt="${altImg}">
        <p>${message}<p>
    `;
}

function changeClass(desiredClass){
    show.setAttribute('class',desiredClass)
}

function disableForm(){
    submitButton.setAttribute('disabled','true')
    textField.setAttribute('disabled','true')
}

function setRiddleNumber(){
    let riddleNumber = Math.floor(Math.random()*10)+1
    return riddleNumber
}