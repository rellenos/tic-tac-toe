let turno = 1;
let tauler = [
    ["","",""],
    ["","",""],
    ["","",""]
]
let ganador = false;

// for (i=0;i<3;i++) {
//     for (j=0;j<3;j++) {
//         console.log(tauler[[i],[j]])
//     } 
// }

for (var i = 1; i <= 9; i++) {
    var casilla = document.getElementById("casilla-" + i);
    
    casilla.onclick = function() {
        if (this.classList.contains("turnoA") || this.classList.contains("turnoB")) {
            alert("pulsa otra casilla");
            return;
        }

        var coordenada = this.className.split(" ")[0].toString()
        var fila = coordenada.charAt(5);
        var columna = coordenada.charAt(6);
        // console.log(coordenada);
        // console.log("el primer valor de coordenada es " + columna + " y el segundo es " + fila)
        if (turno%2 == 0) {
            this.classList.add("turnoA")
            tauler[fila][columna] = "X";
        }
        if (turno%2 != 0) {
            this.classList.add("turnoB")
            tauler[fila][columna] = "O";
        }
        turno++;
        // console.log(turno);
        console.log(tauler);
        validar();
        if (ganador) alert("has guanyat");
    }
}

function validar() {
    
    // console.log(ganador);
    for (let i = 0; i < 3; i++) {
        if((tauler[i][0]==tauler[i][1])&&(tauler[i][0]==tauler[i][2])&&(tauler[i][0]!="")) {
            ganador = true;
            console.log(ganador);
        }
        if((tauler[0][i]==tauler[1][i])&&(tauler[0][i]==tauler[2][i])&&(tauler[0][i]!="")) {
            ganador = true;
            console.log(ganador);
        }
        if((((tauler[0][0]==tauler[1][1])&&(tauler[0][0]==tauler[2][2]))
        ||  ((tauler[0][2]==tauler[1][1])&&(tauler[0][2]==tauler[2][0])))
        &&  (tauler[1][1]!="")) {
            ganador = true;
            console.log(ganador);
        }
    }
}

/*function ganar() {
    var mensajeGanar = document.getElementById("mensajeGanar");
    var colorGanador = document.getElementById("colorGanador");

    switch (tauler[0][0] && tauler[0][1] && tauler[0][2]) {
        case "X":
            mensajeGanar.style.display = "block";
            colorGanador.innerHTML = "azul";
            break;
    }
    switch (tauler[0][0] && tauler[0][1] && tauler[0][2]) {
        case "O":
            mensajeGanar.style.display = "block";
            document.getElementById("colorGanador").innerHTML = "naranja";
            break;
    }
}*/