let pl_One_Data = document.getElementById("pl_one");
let pl_Two_Data = document.getElementById("pl_two");
let reset_Data = document.getElementById("reset");
let game_Table = document.getElementById("game_table");
let cell_Data = document.getElementsByClassName("game_cell");
let win_Data = document.getElementById("win");
let cell_Data_Record = [[], [], []];
let playersign = '';
let playerWin;
let signCount = 0;

const selectPlayer = (event) => {
    
    if (event.target.id == pl_One_Data.id) {
        pl_Two_Data.style.visibility = "hidden";
        reset_Data.style.visibility = "visible";
        reset_Data.style.marginLeft = "-80px";
        playersign = "X";
        
    } else {
        pl_One_Data.style.display = "none";
        reset_Data.style.visibility = "visible";
        reset_Data.style.marginLeft = "60px";
        playersign ="O"
    }
    game_Table.style.visibility = "visible";
    
}

const getsign = (event, ind1, ind2) => {
    signCount += 1;
    console.log(signCount,"c");
    let sign = event.target;
    let sign_Pointer = document.getElementById(event.target.id);
    sign.innerHTML = playersign;
    if (playersign == "X") {
        playersign = "O"
    } else {
        playersign = "X";
    }   
    sign_Pointer.style.pointerEvents = "none";
    
    CheckPlayerWin(event, ind1, ind2)

}


const CheckPlayerWin = (event,ind1,ind2) => {
    // playerWin = true;
    let selected_Cell = event.target;
    console.log(selected_Cell);
    cell_Data_Record[ind1][ind2] = selected_Cell.innerHTML;
    console.log(cell_Data_Record);
    if (cell_Data_Record[0][0] === cell_Data[1].innerHTML   && cell_Data_Record[0][1] === cell_Data[2].innerHTML) {
        win_Data.innerHTML = "You Win";
        game_Table.style.pointerEvents = "none";
        // playerWin = true;
    }
    
    else if (cell_Data_Record[1][0] === cell_Data[4].innerHTML && cell_Data_Record[1][1] === cell_Data[5].innerHTML) {
        win_Data.innerHTML = "You Win";
        game_Table.style.pointerEvents = "none";
        // playerWin = true;
    }

    else if (cell_Data_Record[2][0] ==  cell_Data[7].innerHTML && cell_Data_Record[2][0] ==  cell_Data[8].innerHTML) {
        win_Data.innerHTML = "You Win";
        game_Table.style.pointerEvents = "none";
        // playerWin = true;
    }

    else if (cell_Data_Record[0][0] == cell_Data[3].innerHTML && cell_Data_Record[1][0] == cell_Data[6].innerHTML) {
        win_Data.innerHTML = "You Win";
        game_Table.style.pointerEvents = "none";
        // playerWin = true;
    }

    else if (cell_Data_Record[0][1] == cell_Data[4].innerHTML && cell_Data_Record[1][1] == cell_Data[7].innerHTML) {
        win_Data.innerHTML = "You Win";
        game_Table.style.pointerEvents = "none";
        // playerWin = true;
    }
    
    else if (cell_Data_Record[0][2] == cell_Data[5].innerHTML && cell_Data_Record[1][2] == cell_Data[8].innerHTML) {    
        win_Data.innerHTML = "You Win";
        game_Table.style.pointerEvents = "none";
        // playerWin = true;    
    }

    else if (cell_Data_Record[0][0] == cell_Data[4].innerHTML && cell_Data_Record[1][1] == cell_Data[8].innerHTML) {    
        win_Data.innerHTML = "You Win";
        game_Table.style.pointerEvents = "none";
        // playerWin = true;
    }

    else if (cell_Data_Record[0][2] == cell_Data[4].innerHTML && cell_Data_Record[1][1] == cell_Data[6].innerHTML) {    
        win_Data.innerHTML = "You Win";
        game_Table.style.pointerEvents = "none";
        // playerWin = true;
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
    console.log(game_Table.style.pointerEvents = "auto")
    win_Data.innerHTML = "";
    signCount = 0;
    playersign = '';
    for (let i = 0; i < cell_Data.length; i++) { 
        cell_Data[i].innerHTML = "";
        console.log(cell_Data[i],"f");
        cell_Data[i].style.pointerEvents = "auto";
    }
    cell_Data_Record = [[], [], []];
    console.log(cell_Data_Record,"reset");
}

// const exists = (arr, search) => {
//     return arr.some(row => row.includes(search));
// }

// if (!playerWin && !exists(cell_Data_Record,"")) {
//     win_Data.innerHTML = "Match Tie";
// }

// for (i = 0; i < cell_Data_Record.length; i++) {
    
//     let innerArraylength = cell_Data_Record[i].length;
//     for (j = 0; j < innerArraylength.length; j++) {

//     }
//     if (innerArraylength == 0) {
//         console.log("array is empty");
//     } else {
//         console.log("array is not empty");
//     }
// }   

