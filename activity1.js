score = 0;

function UpScore(){
    score = score + 1;
    document.getElementById("UpS").innerHTML = "Score: " + score;
}

function SaveScore(){
    localStorage.setItem("Score: ", score);//Key, Value
}

function NewPage(){
    window.location = "Ac_2.html";
}