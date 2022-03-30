var btnIniciar = document.querySelector("#boton-invisible");
var canvas = document.querySelector("#ahorcado");
var pincel = canvas.getContext('2d');
var letra = document.querySelector("#letra-intento");

var palabraSecreta;
var letrasIncorrectas = [];
var letrasCorrectas = new Set();

var errores = 0;
var aciertos = 0;

btnIniciar.addEventListener("click", function (evento) {
  evento.preventDefault();

  pincel.fillStyle = "grey";
  pincel.fillRect(0, 0, 1200, 800);

  dibujarAhorcado();

  palabraSecreta = escogerPalabra();
  console.log(palabraSecreta);

  dibujarLineas(palabraSecreta);
  letra.focus();
  letra.addEventListener("input", verificarTeclaPresionada);
});

function dibujarAhorcado() {
  pincel.fillStyle = "black";

  pincel.beginPath();
  pincel.moveTo(50, 700);
  pincel.lineTo(250, 700);
  pincel.lineTo(220, 630);
  pincel.lineTo(80, 630);
  pincel.fill();

  pincel.beginPath();
  pincel.moveTo(146, 700);
  pincel.lineTo(146, 100);
  pincel.lineTo(154, 100);
  pincel.lineTo(154, 700);
  pincel.fill();

  pincel.beginPath();
  pincel.moveTo(154, 100);
  pincel.lineTo(350, 100);
  pincel.lineTo(350, 108);
  pincel.lineTo(154, 108);
  pincel.fill();

  pincel.beginPath();
  pincel.moveTo(350, 108);
  pincel.lineTo(350, 130);
  pincel.lineTo(342, 130);
  pincel.lineTo(342, 108);
  pincel.fill();
}

function dibujarCabeza() {
  pincel.beginPath();
  pincel.arc(346, 170, 40, 0, 2 * Math.PI);
  pincel.fill();
}

function dibujarCuerpo() {
  pincel.beginPath();
  pincel.moveTo(342, 210);
  pincel.lineTo(342, 400);
  pincel.lineTo(347, 400);
  pincel.lineTo(347, 210);
  pincel.fill();
}

function dibujarBrazoDerecho() {
  pincel.beginPath();
  pincel.moveTo(343, 240);
  pincel.lineTo(220, 340);
  pincel.lineTo(223, 343);
  pincel.lineTo(343, 245);
  pincel.fill();
}

function dibujarBrazoIzquierdo() {
  pincel.beginPath();
  pincel.moveTo(346, 240);
  pincel.lineTo(469, 320);
  pincel.lineTo(466, 323);
  pincel.lineTo(346, 245);
  pincel.fill();
}

function dibujarPiernaDerecha() {
  pincel.beginPath();
  pincel.moveTo(343, 395);
  pincel.lineTo(280, 550);
  pincel.lineTo(283, 553);
  pincel.lineTo(346, 400);
  pincel.fill();
}

function dibujarPiernaIzquierda() {
  pincel.beginPath();
  pincel.moveTo(343, 395);
  pincel.lineTo(406, 550);
  pincel.lineTo(409, 547);
  pincel.lineTo(349, 400);
  pincel.fill();
}

function dibujarLineas(palabra) {
  var cantLetras = palabra.length;
  var x = 400;
  var i = 1;
  while (i <= cantLetras) {
    pincel.fillStyle = "black";
    pincel.fillRect(x, 700, 40, 2);
    x += 60;
    i++;
  }
}

function dibujarLetraCorrecta(letra, indice) {
  var x = 405 + (indice - 1) * 60;

  pincel.font = "40px Verdana";
  pincel.fillStyle = "black";
  pincel.fillText(letra, x, 690);
}

function dibujarLetraIncorrecta(letra) {
  if (!letrasIncorrectas.includes(letra)) {
    letrasIncorrectas.push(letra);

    var x = 600 + (letrasIncorrectas.length - 1) * 60;

    pincel.font = "40px Verdana";
    pincel.fillStyle = "black";
    pincel.fillText(letra, x, 400);
  } else {
    alert("Ya ingreso esa letra");
  }
}

function dibujarErrores() {
  while (errores < 7) {
    if (errores == 1) {
      dibujarCabeza();
      break;
    } else if (errores == 2) {
      dibujarCuerpo();
      break;
    } else if (errores == 3) {
      dibujarBrazoDerecho();
      break;
    } else if (errores == 4) {
      dibujarBrazoIzquierdo();
      break;
    } else if (errores == 5) {
      dibujarPiernaDerecha();
      break;
    } else {
      dibujarPiernaIzquierda();
      finDeJuego();
      break;
    }
  }
}
function finDeJuego() {
  console.log("perdiste");
  letra.classList.add("invisible");
  pincel.fillStyle = "#f7f7f7";
  pincel.fillRect(0, 0, 1200, 800);

  pincel.font = "25px Verdana";
  pincel.fillStyle = "black";
  pincel.fillText("Perdiste, la palabra era " + palabraSecreta, 370, 400);
}
function ganaste() {
  letra.classList.add("invisible");
  pincel.fillStyle = "grey";
  pincel.fillRect(0, 0, 1200, 800);

  pincel.font = "25px Verdana";
  pincel.fillStyle = "black";
  pincel.fillText(
    "Ganaste, has adivinado la palabra secreta: ",
    370, 400
  );
  pincel.fillText(palabraSecreta, 520, 450);
}
