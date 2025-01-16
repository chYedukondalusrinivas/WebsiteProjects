let us=0;
let cs=0;
const symbols=document.querySelectorAll(".symbol"); //for user choices
const result=document.querySelector("#result"); //for result
const userScore=document.querySelector("#user-score");
const comScore=document.querySelector("#com-score");

//-------------- to generate computer choice ----------------------------------------------//
const comSymbol=()=>{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
};

// ------------------------------------ draw game ----------------------------------------//
const drawGame=()=>{
    result.innerText="Game drawn";
    result.style.backgroundColor="black";
    console.log('Game drawn');

};

//------------------------------------ Displaying Wiiner -------------------------------------//
const showWinner=(userWin)=>{
    if(userWin){       //user win
        us+=1;
        userScore.innerText=us;
        result.innerText="You Won!";
        result.style.backgroundColor="green";
        console.log("You Won!");
    }
    else{       //user lost
        cs+=1;
        comScore.innerText=cs;
        result.innerText="You Lost.";
        result.style.backgroundColor="red";
        console.log("you Lost.");
    }
};


// --------------------------------------- playing game ------------------------------------------//
const playGame=(userChoice) =>{
   const comChoice=comSymbol();

   if(userChoice === comChoice ){
        drawGame();
   }
   else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scisscors
            userWin= comChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=comChoice==="scissors" ? false:true;
        }
        else{
            //rock,paper
            userWin= comChoice==="rock" ? false:true;
        }
        showWinner(userWin);
   }
    
};

//-------------------------------------------- getting user choices ----------------------------------------------//
symbols.forEach((symbol)=>{
    
    symbol.addEventListener("click",()=>{

        const userSymbol=symbol.getAttribute("id");

        // console.log("Symbol is clicked",userSymbol);
        
        playGame(userSymbol);
    });

});

