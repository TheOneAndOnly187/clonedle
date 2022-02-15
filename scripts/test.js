document.getElementById("change_Yellow").addEventListener("click", changeYellow);
document.getElementById("change_Red").addEventListener("click", changeRed);
document.getElementById("change_Green").addEventListener("click", changeGreen);

function changeRed() {
    let letter = document.getElementById("input").value.toUpperCase();

    document.getElementById("kb_"+letter).className = "kb_btn_alpha word_cell_wrong";
}

function changeYellow() {
    let letter = document.getElementById("input").value.toUpperCase();

    document.getElementById("kb_"+letter).className += "kb_btn_alpha word_cell_hint";
}

function changeGreen() {
    let letter = document.getElementById("input").value.toUpperCase();

    document.getElementById("kb_"+letter).className += "kb_btn_alpha word_cell_solved";
}

