let pl_One_Data = document.getElementById("pl_one");
let pl_Two_Data = document.getElementById("pl_two");
let reset_Data = document.getElementById("reset");
let game_Table = document.getElementById("game_table");
let cell_Data = document.getElementsByClassName("game_cell");
let win_Data = document.getElementById("win");
let cell_Data_Record = [[], [], []];
let playersign = '';
let signCount = 0;

const selectPlayer = (event) => {
    if (event.target.id == pl_One_Data.id) {
        pl_Two_Data.style.visibility = "hidden";
        reset_Data.style.marginLeft = "-80px";
        playersign = "X";
        
    } else {
        pl_One_Data.style.display = "none";
        reset_Data.style.marginLeft = "60px";
        playersign = "O";
    }
    reset_Data.style.visibility = "visible";
    game_Table.style.visibility = "visible";
    
}

const getsign = (event, ind1, ind2) => {
    signCount += 1;
    // console.log(signCount,"c");
    let sign = event.target;
    let sign_Pointer = document.getElementById(event.target.id);
    sign.innerHTML = playersign;
    if (playersign == "X") {
        playersign = "O";
    } else {
        playersign = "X";
    }   
    sign_Pointer.style.pointerEvents = "none";
    CheckPlayerWin(event, ind1, ind2)
}

const CheckPlayerWin = (event,ind1,ind2) => {
    let selected_Cell = event.target;
    // console.log(selected_Cell);
    cell_Data_Record[ind1][ind2] = selected_Cell.innerHTML;
    // console.log(cell_Data_Record);
    if (
        (cell_Data_Record[0][0] === cell_Data[1].innerHTML && cell_Data_Record[0][1] === cell_Data[2].innerHTML) ||
        (cell_Data_Record[1][0] === cell_Data[4].innerHTML && cell_Data_Record[1][1] === cell_Data[5].innerHTML) ||
        (cell_Data_Record[1][0] === cell_Data[4].innerHTML && cell_Data_Record[1][1] === cell_Data[5].innerHTML) ||
        (cell_Data_Record[2][0] === cell_Data[7].innerHTML && cell_Data_Record[2][0] === cell_Data[8].innerHTML) ||
        (cell_Data_Record[0][0] === cell_Data[3].innerHTML && cell_Data_Record[1][0] === cell_Data[6].innerHTML) ||
        (cell_Data_Record[0][1] === cell_Data[4].innerHTML && cell_Data_Record[1][1] === cell_Data[7].innerHTML) ||
        (cell_Data_Record[0][2] === cell_Data[5].innerHTML && cell_Data_Record[1][2] === cell_Data[8].innerHTML) ||
        (cell_Data_Record[0][0] === cell_Data[4].innerHTML && cell_Data_Record[1][1] === cell_Data[8].innerHTML) ||
        (cell_Data_Record[0][2] === cell_Data[4].innerHTML && cell_Data_Record[1][1] === cell_Data[6].innerHTML))
    {   
        win_Data.innerHTML = `Player ${playersign} Win`;
        game_Table.style.pointerEvents = "none";
    }
    else {  
        if (signCount == 9) {
            win_Data.innerHTML = "Match Tie";
        }
    }
}


const reset = () => {
    pl_One_Data.style.display = "unset";
    pl_Two_Data.style.visibility = "visible";
    reset_Data.style.visibility = "hidden";
    game_Table.style.visibility = "hidden";
    game_Table.style.pointerEvents = "unset";
    win_Data.innerHTML = "";
    signCount = 0;
    playersign = '';
    for (let i = 0; i < cell_Data.length; i++) { 
        cell_Data[i].innerHTML = "";
        cell_Data[i].style.pointerEvents = "unset";
    }
    cell_Data_Record = [[], [], []];
}
