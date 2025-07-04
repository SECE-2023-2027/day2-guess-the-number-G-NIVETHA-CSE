const againButton = document.querySelector('.again');
const num = document.querySelector('.number');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('#currentScore');
const highscore = document.querySelector('#high');

let random = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
console.log(random);

const checkFunc = () => {
    const guesss = Number(guess.value);
    console.log(guesss);
    if (!guesss) {
        message.textContent = 'User has not entered anything!!!';
    }
    else if (guesss === random) {
        highscore.textContent = scores;
        document.querySelector('body').style.backgroundColor = 'green';
        num.textContent = random;
    }else if(guesss < random){
        scores -= 1;
        score.textContent = scores;
        message.textContent = 'Number is too low';
    }else if(guesss > random){
        scores -= 1;
        score.textContent = scores;
        message.textContent = 'Number is too high';
    }
     if(scores === 0){
        message.textContent = "You lost the game!!!";
        document.querySelector('body').style.backgroundColor = 'red';
        num.textContent = random;
        checkBtn.disabled = true;
        guess.disabled = true;
    }
};

checkBtn.addEventListener('click', checkFunc);

const againFunc = () => {
    random = Math.trunc(Math.random() * 20) + 1;
    console.log(random);
    scores = 20;
    score.textContent = scores;
    message.textContent = 'Start Guessing....';
    num.textContent = '?';
    guess.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    checkBtn.disabled = false;
    guess.disabled = false;   
}

againButton.addEventListener('click', againFunc);
