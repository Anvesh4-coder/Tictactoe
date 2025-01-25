let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newbtn");
const msgContainer=document.querySelector(".container2");
let msg=document.querySelector("#msg");
let turno=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    count=0
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxs.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("clicked");
        count++;
        if(turno){
            box.style.color='red';
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            box.style.color='blue';
            turno=true;
        }
        box.disabled=true;

        checkWinner();
        if(count==9){
            console.log("NO Result");
        }
    })
});

const disableBoxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText= `congratulations , winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
    let pos1=boxs[pattern[0]].innerText;
    let pos2=boxs[pattern[1]].innerText;
    let pos3=boxs[pattern[2]].innerText;

    if(pos1 !="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);
            showWinner(pos1);
        }
    }
    };
    
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);