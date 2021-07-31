let pl_One_Data = document.getElementById("pl_one");
let pl_Two_Data = document.getElementById("pl_two");
let reset_Data = document.getElementById("reset");
let cell_Data = document.getElementsByClassName("game_cell")
let playersign = '';

const selectPlayer = (event) => {

    if (event.target.id == pl_One_Data.id) {
            pl_Two_Data.style.visibility = "hidden";
            reset_Data.style.visibility = "visible";
            reset_Data.style.marginLeft = "-80px";
            playersign = "X"
            console.log(playersign,"playersign");
    } else {
            pl_One_Data.style.display = "none";
            reset_Data.style.visibility = "visible";
            reset_Data.style.marginLeft = "60px";
            playersign ="O"
    }
}

const getsign = (event) => {
    let sign = event.target;
    sign.innerHTML = playersign;
    if (playersign == "X") {
        playersign = "O"
    } else {
        playersign = "X";
    }
}




const reset = () => {
    pl_One_Data.style.display = "unset";
    pl_Two_Data.style.visibility = "visible";
    reset_Data.style.visibility = "hidden";
    playersign = ''
    console.log( playersign,"sign");

    for (let i = 0; i < cell_Data.length; i++) { 
        cell_Data[i].innerHTML = ""

    }
}
