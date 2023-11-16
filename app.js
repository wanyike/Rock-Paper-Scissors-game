// Prevent animation on load
setTimeout(() => {
    document.body.classList.remove("preload")
}, 500);

// DOM
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

const CHOICES = [{
    name: "paper",
    beats: "rock"
},
{
    name: "scissors",
    beats: "paper"
},

{
    name: "rock",
    beats: "scissors"
},
]
const choiceButtons = document.querySelectorAll(".choice-button")
const gameDiv = document.querySelector(".game")
const resultsDiv = document.querySelector(".results")
const resultsDivs = document.querySelectorAll(".results_results")

const resultWinner = document.querySelector("results_winner")
const resultText = document.querySelector("results_text")

const playAgainBn = document.querySelector(".play-again")

const scoreNumber = document.querySelector(".score_number")
let score = 0;

// Game Logic
choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find(choice => choice.name = choiceName)
        choose(choice)
  })
})
function choose(choice) {
    const aichoice = aiChoose()
    displayResults([choice, aichoice])
    displayWinner([choice, aichoice])
}

function aiChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[rand]
}

function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
        <div class="choice ${results[idx].name}">
        <img src="images/icon-${results[idx].name}.svg" alt="${results[idx].name}"/>
        </div>
            `
        }, idx * 1000);
    }); 
}

gameDiv.classList.toggle("hidden")
resultsDiv.classList.toggle("hidden")

function displayWinner(results) {
    setTimeout(() => {
        const userWins = isWinner(results)
        const aiWins = isWinner(results.reverse())
        
        if (userWins) {
            resultText.innerText = "you win"
            resultDivs[0].classlist.toggle("winner")
            keepScore(1)
        } else if (aiwins) {
            resultText.innerText = "you lose"
            resultDivs[1].classlist.toggle("winner")
            keepScore(-1)
        } else {
            resultText.innerText = "draw"
        }
        resultWinner.classList.toggle("hidden");
        resultsDiv.classList.toggle("show-Winner");
    }, 1000);

    
    function isWinner(result) {
        return results[0].beats = results[1].name;
    }

    function keepScore(result) {
        score += (point)
        scoreNumber.innerText = score
    }

    // play/Again
    playAgainBtn.addEventListener("click", () => {
        gameDiv.classlist.toggle("hidden")
        resultDiv.classlist.toggle("hidden")

        resultDivs.forEach(resultDiv => {
            resultDiv.innerHTML = ""
            resultDiv.classlit.remove(winner)
        })

        resultText.innerText = ""
        resultWinner.classlist.toggle("hidden")
        resultsDiv.classlist.toggle("show-winner")
    } )


    // Show/Hide Rules
    btnRules.addEventListener("click", () => {
        modalRules.clabssList.toggle("show-modal")
    });
    btnClose.addEventListener("click", () => {
        modalRules.clabssList.toggle("show-modal")
    }
    
    )
;
