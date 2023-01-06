document.addEventListener("DOMContentLoaded", () => {

    
    let getComputerChoice=()=>{
        const options=["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random()*options.length);
        console.log(options[randomIndex]);
        return options[randomIndex];


    };
        checkWinner=(playerSelection, computerSelection)=>{
            if(playerSelection==computerSelection){
                return "tie"
            }else if(
                (playerSelection=="rock" && computerSelection=="scissors")||
                (playerSelection=="paper" && computerSelection=="rock")||
                (playerSelection=="scissors" && computerSelection=="paper")
            ){
                return "Player";
            }
            else{
                return "Computer"
            }
        };


        playRound=(playerSelection, computerSelection)=>{
            const result = checkWinner(playerSelection,computerSelection)
            if (result === "tie"){
                return "its a tie"
            }
            else if
                (result ==="Player"){
                    return `You Win ${playerSelection} beats ${computerSelection}.`
                }
            else{
                return `You Lost! ${computerSelection} beats ${playerSelection}`
            }
        }

    const playerSelection="rock";
    const computerChoice=getComputerChoice();
    console.log(playRound(playerSelection, computerChoice))








    // console.log(`Computer Choice: ${computerChoice}`)
    // let userChoice = "rock"
    // gameStart=()=>{
    //     switch (computerChoice){
    //         case "rock":
    //             console.log("tie");
    //             break;
    //         case "paper":
    //             console.log("pc wins");
    //             break;
    //         case "scissors":
    //             console.log("user wins")
    //             break;
    //     };
    // };
    

});