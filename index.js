const readlineSync = require('readline-sync');
const chalk = require('chalk');

// header
console.log(chalk.bold.bgGreen("       DO YOU KNOW ME?       "));
console.log("");
console.log("Lets find out how well you know me.")

// name and welcome
console.log('');
var username = readlineSync.question("To start, enter your name: ");
console.log(chalk.green.bold("Hello " +username+ "!! Let's begin!!!"));
console.log("------------------------------");
console.log('\n')
console.log("Select the correct option and press Enter.");
console.log('');

// questions
const questionArray = [
  q1 = {
    que: "What is my favorite color?\na. Yellow\nb. Green\nc. Brown",
    ans: "c"
  },

  q2 = {
    que: "What is my favorite icecream flavour?\na. Vanilla\nb. Strawberry\nc. Chocolate",
    ans: "a"
  },

  q3 = {
    que: "Which is my favorite dish?\na. Rasgulla\nb. Pani-puri\nc. Noodles",
    ans: "b"
  },

  q4 = {
    que: "Where is my college?\na. Pune\nb. Hydrabad\nc. Delhi",
    ans: "a"
  },

  q5 = {
    que: "What is my favorite vacation place?\na. Nainital\nb. Kashmir\nc. Sikkim",
    ans: "c"
  },

  q6 = {
    que: "Where do I live?\na. Bihar\nb. Gujrat\nc. Maharashtra",
    ans: "c"
  },

  q7 = {
    que: "Which is my favorite sport?\na. Chess\nb. Boxing\nc. Cricket",
    ans: "b"
  },

  q8 = {
    que: "My favorite mobile game?\na. Subway Surfer\nb. Plants vs Zombies\nc. Among us",
    ans: "b"
  },

  q9 = {
    que: "My favorite passtime?\na. Reading\nb. Scrolling insta\nc. Sleeping",
    ans: "a"
  }
];

// high scores
highScoreArray = [
  hs1 = {
    name: "Harry",
    score: "9"
  },

  hs2 = {
    name: "Hermione",
    score: "7"
  },

  hs3 = {
    name: "Ron",
    score: "5"
  }
];


// display que and calculate score
var score = 0;
var levelOne = false;
var levelTwo = false;

for (var i = 0; i < questionArray.length; i++) {
  console.log(chalk.magenta((i+1)+ ") " +questionArray[i].que));
  var answer = readlineSync.question(chalk.blue("Your answer: "));

  if (answer === questionArray[i].ans) {
    score++;

    console.log(chalk.green("---------------------"))
    console.log(chalk.green("It's correct answer! 🎉"));
    console.log(chalk.green("Current score: " +score));
    console.log(chalk.green("---------------------"))
    console.log("");

    levelUpgrade(score);
  } else {
    console.log(chalk.red("---------------------"))
    console.log(chalk.red("It's wrong answer. 😢"));
    console.log(chalk.red("Current score: " +score));
    console.log(chalk.red("---------------------"))
    console.log("");
  }
}


// function for level upgrade
function levelUpgrade (someScore) {
  if (someScore === 3 && levelOne == false) {
    console.log(chalk.bold.bgYellow.black(" ✨✨✨ Yayy!! You have cleared LEVEL 1. ✨✨✨ "));
    console.log("\n");

    levelOne = true;
  }

  if (someScore === 6 && levelTwo === false) {
    console.log(chalk.bold.bgYellow.black(" 🔥🔥🔥 Wohoo!! You have cleared LEVEL 2. 🔥🔥🔥 "));
    console.log("\n");

    levelTwo = true;
  }

  if (someScore === 9) {
    console.log(chalk.bold.bgYellow.black(" 🎊🎊🎊 Hurray!! You have cleared LEVEL 3. 🎊🎊🎊 "));
  }
}

// final score
console.log(chalk.cyan.bold("------------------------------"));
console.log(chalk.bgCyan.bold("   YOUR FINAL SCORE IS: " +score+ "   "));
console.log(chalk.cyan.bold("------------------------------"));
console.log("\n");


// show high scores 
console.log(chalk.yellow("High scores are: "));
for (var i = 0; i < highScoreArray.length; i++) {
  console.log((i+1)+ " " +highScoreArray[i].name+ ": " +highScoreArray[i].score);
}
console.log("");

// check if you beat high score
var beatHighScoreOf = "";
var flag = false;

for (var i = 0; i < highScoreArray.length; i++) {
  if (score >= highScoreArray[i].score) {
    beatHighScoreOf = highScoreArray[i].name;
    flag = true;
    break;
  }
}

if (flag == true) {
  console.log (chalk.bold.bgGreen.black("   🤩🤩🤩 Congratulations! You have beaten the high score of " +beatHighScoreOf+ "   "));
} else {
  console.log (chalk.red.bold("You haven't beaten the high score. 😢"));
}
