//require inquirer
var inquirer = require("inquirer");
//empty array to push card questions into
var cards = []
var cardCount = 0

function BasicCard(front, back) {
    this.front = front
    this.back = back
}

//constructor to create new cards with questions
var card1 = new BasicCard("What is the only fruit with seeds grown on the outside?", "strawberries");
var card2 = new BasicCard("Which fruit has no other word that rhymes with it?", "orange");
var card3 = new BasicCard("One third of all ______ are grown in hawaii.", "pineapples");

//push flashcards into cards array
cards.push(card1);
cards.push(card2);
cards.push(card3);

//function to iterate through flashcards, ask the questions, and check the answers.
function flashards() {
    if (cardCount < cards.length) {
        inquirer.prompt([{
            name: "question",
            message: cards[cardCount].front
        }]).then(function (answer) {
            //check if the answer to the prompt is equal to the back of the card.
            if ((answer.question) === cards[cardCount].back) {
                console.log("correct");
                //if the answer is correct add to card count
                cardCount++
                flashcards();
            } else {
                //if the answer is not correct, tell the user the correct answer
                console.log("Incorrect. The answer is: " + cards[cardCount].back);
                //again add to the card count
                cardCount++
                flashcards();
            }
        });
    }
}

flashcards();