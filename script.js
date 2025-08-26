let incercari = [];
let random = [];  
let joc = true;  

const castig = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function verificaCastigator(miscari) {
    return castig.some(combinatie =>
        combinatie.every(poz => miscari.includes(poz))
    );
}

function X(numar) {
    if (joc==true)
    {
    let casute = document.querySelectorAll('.caseta');
    let rezultat = document.getElementById('rezultat');
    numar = Number(numar);

    if (casute[numar - 1].textContent !== "") return;

    casute[numar - 1].textContent = "X";
    casute[numar - 1].style.color = "#f8d66d";
    incercari.push(numar);

    if (verificaCastigator(incercari)) {
        rezultat.textContent = "You won!";
        rezultat.style.color = "#f8d66d";
        joc=false;
        return;
    }

    let libere = [];
    for (let i = 0; i < casute.length; i++) {
        if (casute[i].textContent === "") {
            libere.push(i);
        }
    }

    if (libere.length === 0) {
        rezultat.textContent = "It's a tie!";
        rezultat.style.color = "#7866ffff";
        joc=false;
        return;
    }

    let pozRandom = libere[Math.floor(Math.random() * libere.length)];
    casute[pozRandom].textContent = "O";
    casute[pozRandom].style.color = "#d6d6e0";
    random.push(pozRandom + 1); 

    if (verificaCastigator(random)) {
        rezultat.textContent = "You lose!";
        rezultat.style.color = "#d6d6e0";
        joc=false;
    }
}
}
function reset(){
    let casute = document.querySelectorAll('.caseta');
    casute.forEach(casuta =>{
        casuta.textContent = "";
    })
    joc=true;
    incercari = [];
    random = [];  
    rezultat.textContent= "";
}