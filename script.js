let userScore=0;
let compScore=0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const userMove_img = document.getElementById("user-move");
const compMove_img = document.getElementById("comp-move");
const result_p = document.getElementById("lets-play");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getCompChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function getElement(user)
{
    switch(user){
        case "r":
            return rock_div;
            break;
        case "p":
            return paper_div;
            break;
        case "s":
            return scissor_div;
            break;
    }
}

function changeBoard(user,comp)
{
    switch(user){
        case "r":
            userMove_img.src = "https://img.icons8.com/color/48/000000/hand-rock.png";
            break;
        case "p":
            userMove_img.src = "https://img.icons8.com/color/50/000000/hand.png";
            break;
        case "s":
            userMove_img.src = "https://img.icons8.com/color/50/000000/hand-scissors--v1.png";
            break;
    }
    
    switch(comp){
        case "r":
            compMove_img.src = "https://img.icons8.com/color/48/000000/hand-rock.png";
            break;
        case "p":
            compMove_img.src = "https://img.icons8.com/color/50/000000/hand.png";
            break;
        case "s":
            compMove_img.src = "https://img.icons8.com/color/50/000000/hand-scissors--v1.png";
            break;
    }
}

function win(user,comp)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "You Win";
    getElement(user).style.borderColor = "green";
    setTimeout(() => getElement(user).style.borderColor = "white",300);
}

function loose(user,comp)
{
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "You Loose";
    getElement(user).style.borderColor = "red";
    setTimeout(() => getElement(user).style.borderColor = "white",300);
}

function draw(user,comp)
{
    result_p.innerHTML = "Its a Draw";
    getElement(user).style.borderColor = "grey";
    setTimeout(() => getElement(user).style.borderColor = "white",300);
}

function game(userChoice)
{
    compChoice=getCompChoice();
    changeBoard(userChoice,compChoice);
    switch(userChoice + compChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice,compChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            loose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissor_div.addEventListener('click',() => game("s"));
}

main();