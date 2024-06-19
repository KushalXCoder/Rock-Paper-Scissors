function gameLogic(myChoice) {
    let playerScore = document.querySelector(".my-score");
    let count = parseInt(playerScore.innerText);
    let compScore = document.querySelector(".comp-score");
    let count1 = parseInt(compScore.innerText);
    let array = ["Rock","Paper","Scissors"];
    let randomNumber = Math.floor(Math.random()*array.length);
    let computerChoice = array[randomNumber];
    let text = document.querySelector(".text-box");
    let playagain = document.querySelector(".playagain");
    
    document.querySelectorAll(".rock, .paper, .scissors").forEach(element => {
        element.classList.remove("rock1");
    });

    document.querySelectorAll(".rock, .paper, .scissors").forEach(element => {
        element.classList.remove("rock2");
    });

    if (computerChoice == "Rock" && myChoice == "Rock" || computerChoice == "Paper" && myChoice == "Paper" || computerChoice == "Scissors" && myChoice == "Scissors") {
        text.innerHTML = "It's a draw, play again!";
        text.style.backgroundColor = "black";
        //document.querySelector(`.${computerChoice.toLocaleLowerCase()}`).classList.add("rock1");
        //document.querySelector(`.${myChoice.toLocaleLowerCase()}`).classList.add("rock2");
        console.log(randomNumber);
        console.log("User choice: " + myChoice);
        console.log("Computer choice: " + computerChoice);
        console.log("Point to: No-one");
    }
    else if (computerChoice == "Rock" && myChoice == "Scissors" || computerChoice == "Paper" && myChoice == "Rock" || computerChoice == "Scissors" && myChoice == "Paper") {
        count1++;
        compScore.innerText = count1;
        text.style.backgroundColor = "red";
        text.innerText = `Computer got this point, ${computerChoice} beats your ${myChoice}`;
        document.querySelector(`.${computerChoice.toLocaleLowerCase()}`).classList.add("rock1");
        document.querySelector(`.${myChoice.toLocaleLowerCase()}`).classList.add("rock2");
        console.log("User choice: " + myChoice);
        console.log("Computer choice: " + computerChoice);
        console.log("Point to: Computer");
    }
    else {
        count++;
        playerScore.innerText = count;
        text.style.backgroundColor = "green";
        text.innerText = `You got one point, your ${myChoice} beats ${computerChoice}`;
        document.querySelector(`.${computerChoice.toLocaleLowerCase()}`).classList.add("rock1");
        document.querySelector(`.${myChoice.toLocaleLowerCase()}`).classList.add("rock2");
        console.log(randomNumber);
        console.log("User choice: " + myChoice);
        console.log("Computer choice: " + computerChoice);
        console.log("Point to: You");
    }

    if(count >= 5) {
        text.innerText = "Congratulations, you won the game";
        console.log("Congratulations, you won the game");
        playagain.style.display = "block";
        document.querySelector(".rock").addEventListener("click",reload);
        document.querySelector(".paper").addEventListener("click",reload);
        document.querySelector(".scissors").addEventListener("click",reload);
    }
    else if(count1 >= 5) {
        text.innerText = "Sorry, computer won the game";
        console.log("Sorry, computer won the game");
        playagain.style.display = "block";
        document.querySelector(".rock").addEventListener("click",reload);
        document.querySelector(".paper").addEventListener("click",reload);
        document.querySelector(".scissors").addEventListener("click",reload);
    }
}

function reload() {
    window.location.reload();
}

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

rock.addEventListener("click", function() {
    gameLogic("Rock");
});
paper.addEventListener("click", function() {
    gameLogic("Paper");
});
scissors.addEventListener("click", function() {
    gameLogic("Scissors");
});

let playagain = document.querySelector(".playagain");
playagain.addEventListener("click",reload);