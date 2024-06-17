let turno = 1;
let tauler = [
    ["","",""],
    ["","",""],
    ["","",""]
]

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

        var coordenada = document.getElementsByClassName("coord" + /\d+/)
        console.log(coordenada);
        // coordenada.toString();
        // var fila = parseInt(coordenada.chartAt(5));
        // var columna = parseInt(coordenada.chartAt(6));

        if (turno%2 == 0) {
            this.classList.add("turnoA")
            // tauler[fila][columna] = "X";
        }
        if (turno%2 != 0) {
            this.classList.add("turnoB")
            // tauler[fila][columna] = "O";
        }
        turno++;
        console.log(turno);
        console.log(tauler)
    }
}
