let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let new_game = document.querySelector("#new_game")
let msgforcontainer = document.querySelector(".msgfor_container")
let msg =document.querySelector("#msg");

let turnO= "true"  //player x , player o
const winpoints = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () =>{
    turnO =true;
    enabledbox();
    msgforcontainer.classList.add("hide")
}


boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        // console.log("it is clicked")
        // box.innerText = "X";
        if (turnO){
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        
        Winnercheck();
    })
});

const disabledbox = ()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enabledbox = ()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""

    }
}


const showwinner = (winner)=>{
    msg.innerText = `congratulations, winner is ${winner}`;
    msgforcontainer.classList.remove("hide");
    disabledbox();
}

const Winnercheck=()=>{
    for(let point of winpoints){

        // console.log(point[0],point[1],point[2]);

          let pos1 =  boxes[point[0]].innerText;
          let pos2 =  boxes[point[1]].innerText;
          let pos3 =  boxes[point[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3!= ""){

                if(pos1 === pos2 && pos2 === pos3 ){
                    console.log("you are the winner ", pos1)

                    showwinner(pos1);
                }
            }  
    }
};

new_game.addEventListener("click",resetGame)
reset_btn.addEventListener("click",resetGame)