let turno = 1;
let tauler = [
    ["","",""],
    ["","",""],
    ["","",""]]
let ganadorX = false;
let ganadorO = false;

// for (i=0;i<3;i++) {
//     for (j=0;j<3;j++) {
//         console.log(tauler[[i],[j]])
//     } 
// }

for (var i = 1; i <= 9; i++) {
    var casilla = document.getElementById("casilla-" + i);
    
    casilla.onclick = function() {
        if (this.classList.contains("cercle") || this.classList.contains("cross")) {
            alert("pulsa otra casilla");
            return;
        }

        var coordenada = this.className.split(" ")[0].toString()
        var fila = coordenada.charAt(5);
        var columna = coordenada.charAt(6);
        // console.log(coordenada);
        // console.log("el primer valor de coordenada es " + columna + " y el segundo es " + fila)
        if (turno%2 == 0) {
            // this.classList.add("turnoA")
            this.classList.remove("div");
            this.classList.add("cercle")
            tauler[fila][columna] = "O";
        }
        if (turno%2 != 0) {
            // this.classList.add("turnoB")
            this.classList.remove("div");
            this.classList.add("cross")
            tauler[fila][columna] = "X";
        }
        ganar();
        turno++;
        console.log(tauler);
        if(turno == 10 && (ganadorO == false || ganadorX == false)) alert("Partida finalitzada");
    }
}

function ganar() {
    var mensajeGanar = document.getElementById("mensajeGanar");
    var colorGanador = document.getElementById("colorGanador");

    for (let i = 0; i < 3; i++) {
        if((tauler[i][0]==tauler[i][1])&&(tauler[i][0]==tauler[i][2])&&(tauler[i][0]=="X")&&(tauler[i][0])!="") {
            ganadorX = true;
        }
        if((tauler[i][0]==tauler[i][1])&&(tauler[i][0]==tauler[i][2])&&(tauler[i][0]=="O")&&(tauler[i][0])!="") {
            ganadorO = true;
        }
        if((tauler[0][i]==tauler[1][i])&&(tauler[0][i]==tauler[2][i])&&(tauler[0][i]=="X")&&(tauler[0][i])!="") {
            ganadorX = true;
        }
        if((tauler[0][i]==tauler[1][i])&&(tauler[0][i]==tauler[2][i])&&(tauler[0][i]=="O")&&(tauler[0][i])!="") {
            ganadorO = true;
        }
        if((((tauler[0][0]==tauler[1][1])&&(tauler[0][0]==tauler[2][2]))
        ||  ((tauler[0][2]==tauler[1][1])&&(tauler[0][2]==tauler[2][0])))
        &&  (tauler[1][1]!="")&&(tauler[1][1]=="X")) {
            ganadorX = true;
            
        }
        if((((tauler[0][0]==tauler[1][1])&&(tauler[0][0]==tauler[2][2]))
        ||  ((tauler[0][2]==tauler[1][1])&&(tauler[0][2]==tauler[2][0])))
        &&  (tauler[1][1]!="")&&(tauler[1][1]=="O")) {
            ganadorO = true;
        }
    }

    if (ganadorX) {
        mensajeGanar.style.display = "block";
        colorGanador.innerHTML = "X";
        console.log(ganadorX);
    }
    if (ganadorO) {
        mensajeGanar.style.display = "block";
        colorGanador.innerHTML = "O";
        console.log(ganadorO);
    }
}

//antiga funció de guanyar que funciona a mitjes
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