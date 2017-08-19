$(document).ready(function() {

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button to generate HTML
$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	generateHTML();
	timerWrapper();
}); 

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		clearInterval(clock);
		generateWin();
	}
	else {
		clearInterval(clock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	reset();
}); 

}); 

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000); 
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 2000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>5</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>" + answerArray[questionCounter][0] + "</p><p class='answer'>"+answerArray[questionCounter][1]+"</p><p class='answer'>"+answerArray[questionCounter][2]+"</p><p class='answer'>"+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 5;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
    clock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(clock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function reset() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 5;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 5;
var questionArray = [
    "What is Harry Potter's mother's name?", 
    "What is the addess of Sirius Black's home?", 
    "What Animagus form did James Potter take?", 
    "Which is NOT considered one of the three unforgivable curses?", 
    "What material is Harry Potter's wand core made from?", 
    "When is Harry Potter's birthday?", 
    "What form is Ron Weasley's patronus?", 
    "What was Tom Riddle's mother's maiden name?"];
var answerArray = [
    ["Lily", "Rose", "Tulip", "Laura"], 
    ["4 Privet Drive","3 Little Hangleton","5 Godric's Hollow","12 Grimmauld Place"], 
    ["Dog", "Rat", "Stag", "Hippogriff"], 
    ["Arvada Kedavra","Alohamora","Crucio","Imperio"], 
    ["Dragon heartstring", "Unicorn hair", "Veela hair", "Phoenix feather"], 
    ["July 31st","July 15th","August 31st","June 10th"], 
    ["Otter", "Jack Russell Terrier", "Rabbit", "Horse"], 
    ["Peverell","Gaunt","Riddle","Ignotus"]];
var imageArray = [
    "<img class='center-block img-right' src='img/australia.png'>", 
    "<img class='center-block img-right' src='img/liberia.png'>", 
    "<img class='center-block img-right' src='img/taiwan.png'>", 
    "<img class='center-block img-right' src='img/japan.png'>", 
    "<img class='center-block img-right' src='img/china.png'>", 
    "<img class='center-block img-right' src='img/turkey.png'>", 
    "<img class='center-block img-right' src='img/colombia.png'>", 
    "<img class='center-block img-right' src='img/india.png'>"];
var correctAnswers = [
    "Lily", 
    "12 Grimmauld Place", 
    "Stag", 
    "Alohamora", 
    "Phoenix feather", 
    "July 31st", 
    "Jack Russell Terrier", 
    "Gaunt"];
var questionCounter = 0;
var selecterAnswer;
var clock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;