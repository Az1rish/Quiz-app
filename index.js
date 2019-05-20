let questionNumber = 0;
let correctAnswers = 0;

function handleStartButton() {
    // What happens when you click the start button and the quiz starts
    $('.start').on('click','.start-button', event => {
        console.log("handleStartButton() running");
        $('.start').remove();
        $('.questionForm').css('display','block');
        $('.questionNumber').text(1);
        $('.counts').css({"display": "inline-block", "background-color": '#528ff2'});
    });
}

function formQuestion() {
    if (questionNumber < QUESTIONS.length) {
    
    const format = `<div class="question${questionNumber} questions">
        <form role="form">
            <p>${QUESTIONS[questionNumber].question}</p>
            <label><input type="radio" name="answer" value="${QUESTIONS[questionNumber].answers[0]}" class="radio" required>
             ${QUESTIONS[questionNumber].answers[0]}</label><br>
             <label><input type="radio" name="answer" value="${QUESTIONS[questionNumber].answers[1]}" class="radio" required>
             ${QUESTIONS[questionNumber].answers[1]}</label><br>
             <label><input type="radio" name="answer" value="${QUESTIONS[questionNumber].answers[2]}" class="radio" required>
             ${QUESTIONS[questionNumber].answers[2]}</label><br>
             <label><input type="radio" name="answer" value="${QUESTIONS[questionNumber].answers[3]}" class="radio" required>
             ${QUESTIONS[questionNumber].answers[3]}</label><br>
            <input type="submit" role="button" class="submit-button" value="Submit Answer">
        </form>
    </div>`;
    
    return format;

    } else {
        showResults();
        restartQuiz();
        //$('.questionNumber').text(8);
        $('.counts').css('display','none');
    }
}

function showQuestion() {
    $('.questionForm').html(formQuestion());
}

function handleAnswerSubmit() {
    // Should iterate through each question in sucession one at a time
    // Should not be able to skip questions
    console.log("handleAnswerSubmit() running");
    $('form').on('submit', function (event) {
        event.preventDefault();
        let chosen = $('input:checked');
        let answer = chosen.val();
        let correct = `${QUESTIONS[questionNumber].correct}`;
        if (answer===correct) {
            chosen.parent().addClass('correct');
            correctAnswerFeedback();
            updateCorrectAnswers();
        } else {
            wrongAnswerFeedback();
        }
    })
}

function handleNextButton() {
    $('main').on('click',".next",function (event) {
    updateQuestionNumber();
    showQuestion();
    handleAnswerSubmit();
    });
    
}

function updateQuestionNumber() {
    // self explanatory
    console.log("updateQuestionNumber() running");
    questionNumber++;
    $('.questionNumber').text(questionNumber+1);
}

function updateCorrectAnswers() {
    // very similar to updateQuestionNumber()
    console.log("updateCorrectAnswers() running");
    correctAnswers++;
    $('.correctAnswers').text(correctAnswers);
}

function correctAnswerFeedback() {
    // textual feedback about answer. If incorrect, correct answer will be given
    console.log("correctAnswerFeedback() running");
    let correct = `${QUESTIONS[questionNumber].correct}`;
    $('.questionForm').html(`<div class="correctAnswer"><p><b>You are correct!</b><br>"${QUESTIONS[questionNumber].definition}"</p><button type="button" class="next">Next</button></div>`);
}   

function wrongAnswerFeedback() {
    // textual feedback about answer. If incorrect, correct answer will be given
    console.log("wrongAnswerFeedback() running");
    let correct = `${QUESTIONS[questionNumber].correct}`;
    $('.questionForm').html(`<div class="correctAnswer"><p><b>Sorry, that's wrong</b><br>The correct answer is <span>"${correct}"</span><br>"${QUESTIONS[questionNumber].definition}"</p><button type="button" class="next">Next</button></div>`);
}

function showResults() {
    // show overall score once quiz completed
    if (correctAnswers >= 6) {
        $('.questionForm').html(`<div class="correctAnswer results"><h2>Very nice!</h2><p>You got ${correctAnswers} out of 8 questions correct. You are well on your way to becoming a JavaScript master.</p><button class="restart">Try again?</button></div>`);
    } else if (correctAnswers < 6 && correctAnswers >= 3) {
        $('.questionForm').html(`<div class="correctAnswer results"><h2>Not bad...</h2><p>You got ${correctAnswers} out of 8 questions correct. You know some things, keep doing what your doing and you'll have this stuff down in no time.</p><button class="restart">Try again?</button></div>`);
    } else {
        $('.questionForm').html(`<div class="correctAnswer results"><h2>Can we talk?</h2><p>You got ${correctAnswers} out of 8 questions correct. Getting a low score on an online quiz isn't the end of the world. I would like to refer you to two websites that are very helpful.</p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="link">MDN web docs - Javascript</a><br><a href="https://www.codewars.com/" class="link">codewars</a><button class="restart">Try again?</button></div>`);
    }
}

function restartQuiz() {
    // once complete user should be able to retake quiz
    console.log("restartQuiz() running");
    $('main').on('click','.restart', function (event) {
        location.reload();
    });
}

function puttingItAllTogether() {
    // callback function for the entire app
    handleStartButton();
    showQuestion();
    handleAnswerSubmit();
    handleNextButton();
    restartQuiz();

    console.log("puttingItAllTogether() running")

}

$(puttingItAllTogether);