import { createEle } from "./dom.js";
import { geographie, histoire } from "./class.js";

// variables needed

const element = createEle('div',{'class' :'container'});
console.log(element);
//get the name field value from the first form
const nameField = document.querySelector("#nom");
//get the nickname field value from the first form
const nicknameField = document.querySelector("#prenom");
//get the email field value from the first form
const mail = document.querySelector("#email");
 //get the checkbox value from the first form for histoire
const checkboxHisto = document.querySelector("#histo");
 //get the checkbox value from the first form for geographie
const checkboxGeo = document.querySelector("#geo");
// get the button next of the first form
const sub = document.querySelector("#submit");
// get the prev button of the quiz form
const prevBtn = document.querySelector("#prevbtn");
// get the next button of the quiz form
const nextBtn = document.querySelector("#nextbtn");
// final form field needed
const recNom = document.querySelector("#recapNom");
const recPrenom = document.querySelector("#recapPrenom");
const recEmail = document.querySelector("#recapEmail");
const recChoix = document.querySelector("#recapChoix");
const recQuiz = document.querySelector("#recapQuestions");
const scor = document.querySelector("#score");
const bestScore = document.querySelector("#bestScore");
const refreshBtn = document.querySelector("#refresh");

const geography = new geographie(nameField.value, nicknameField.value);
const history = new histoire(nameField.value, nicknameField.value);

// functions
/**
 * 
 * @param {PointerEvent} e 
 * @param {string} id
*/
function firstStep(e){

    if(nameField.value.trim() == "" || nicknameField.value.trim() == "" || mail.value.trim() == "" || (!checkboxHisto.checked && !checkboxGeo.checked)){
        return;
    }

    if(checkboxHisto.checked == true){
        const questionField = document.querySelector("#questionsContainer");
        history.appendTo(questionField);
    }

    if(checkboxGeo.checked == true){
        const questionField = document.querySelector("#questionsContainer");
        geography.appendTo(questionField);
    }
    
    e.preventDefault();
    const prevForm = document.querySelector("#step1");
    prevForm.classList.remove("active");
    const nextForm = document.querySelector("#step2");
    nextForm.classList.add("active");
}

/**
 * 
 * @param {PointerEvent} e 
 * @param {string} id1 
 * @param {string} id2 
 */
function prevstep(e,prevId,curId) {
    e.preventDefault();
    const prevForm = document.querySelector(`#${prevId}`);
    prevForm.classList.toggle("active");
    const currentForm = document.querySelector(`#${curId}`);
    currentForm.classList.toggle("active");
}

/**
 * 
 * @param {PointerEvent} e 
 * @param {string} nextId 
 * @param {string} curId
 */
function nextStep(e,curId,nextId){
    e.preventDefault();
    if(!confirm(("Every field which are not filled in the quiz form gives 0 points. Please fill them in or confirm your action !").toUpperCase())){
        return;
    }
    const nextForm = document.querySelector(`#${nextId}`);
    nextForm.classList.add("active");
    const currentForm = document.querySelector(`#${curId}`);
    currentForm.classList.remove("active");
}

function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '');
}
/**
 * 
 * @param {histoire} className 
 * @param {Object} className.answers
 * @returns {number}
 */
function score(className){
    let totalPoints = 0;
    for(let i = 1; i <= 4; i++){
        let questionId = `q${i}`;
        let userAnswer = document.querySelector(`#${questionId}`).value.trim();
        
        // Access the correct answer dynamically using the questionId
        let correctAnswer = className.answers[questionId];
        // Normaliser les réponses
        let normalizedUserAnswer = normalizeString(userAnswer);
        let normalizedCorrectAnswer = normalizeString(correctAnswer);
        // Ajouter des points si la réponse est correcte ou vide
        if(normalizedUserAnswer === ""){
            totalPoints += 0;
        } else if(normalizedUserAnswer === normalizedCorrectAnswer){
            totalPoints += 5;
        }
    }    
    return totalPoints;
}
let meilleurScore = localStorage.getItem("bestScore");
function update (score) {
    if(meilleurScore===null){
        meilleurScore = 0;
    }else{
        meilleurScore = parseInt(meilleurScore,10);
    }
    if (score > meilleurScore) {
        localStorage.setItem('bestScore', score);
        meilleurScore = score; // Mettre à jour localement
    }
    meilleurScore = parseInt(meilleurScore,10); // Convertir en nombre entier
    return meilleurScore;
}

// addEventListener

sub.addEventListener("click",e=>{
    firstStep(e);
});

prevBtn.addEventListener("click",e=>{
    prevstep(e,"step1","step2");
});

nextBtn.addEventListener("click",e=>{
    nextStep(e,"step2","step3");
    recNom.textContent = nameField.value;
    recPrenom.textContent = nicknameField.value;
    recEmail.textContent = mail.value;
    let scoreQuiz = 0;
    if(checkboxHisto.checked){
        recChoix.textContent ="HISTOIRE";
        scoreQuiz = score(history);
    }else if(checkboxGeo.checked){
        recChoix.textContent= "GEOGRAPHIE";
        scoreQuiz = score(geography);
    }
    scor.textContent = scoreQuiz;

    bestScore.textContent = update(scoreQuiz);
});

let initScore = parseInt(localStorage.getItem("bestScore"), 10) || 0;
localStorage.setItem("bestScore", initScore);

refreshBtn.addEventListener("click", () => {
    // Sauvegarder le score actuel dans le localStorage
    let currentScore = parseInt(scor.textContent, 10);
    let savedBestScore = parseInt(localStorage.getItem("bestScore"), 10) || 0;

    if (currentScore > savedBestScore) {
        localStorage.setItem('bestScore', currentScore);
    }

    // Réactualiser la page
    location.reload();
});


