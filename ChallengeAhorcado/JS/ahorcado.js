var palabras = ["QUEHACERES",
                "SANGUIJUELA",
                "DESARROLLAR",
                "SACACORCHOS",
                "RONRONEAR",
                "JAVASCRIPT",
                "PROGRAMACION",
                "PEPERINA"];



  if (palabras.length !== 8) {
    palabras = JSON.parse(localStorage.getItem('arrayForLS'));
  } 


function numeroRandom(max, min) {
  return Math.floor(Math.random() * palabras.length);
}

function escogerPalabra() {
  var posicion = numeroRandom(0, palabras.length - 1);
  return palabras[posicion];
}

function verificarTeclaPresionada() {
  var teclaPresionada = letra.value.toUpperCase();
  var caracterValido = new RegExp("[A-Z]", "g");
  var teclaValida = false;

  if (caracterValido.test(teclaPresionada)) {
    teclaValida = true;
  } else {
    alert("No debe ingresar letras con acénto o números");
  }
  //return teclaValida;

  if (teclaValida) {
    var cont = 0;
    var check = true;
    var lastIndex = 0;

    if (letrasCorrectas.has(teclaPresionada)) {
      alert("ya ingreso esta letra");
    } else {
      while (check) {
        var number = palabraSecreta.indexOf(teclaPresionada, lastIndex);
        if (number != -1) {
          lastIndex = number + 1;
          aciertos++;
          dibujarLetraCorrecta(teclaPresionada, lastIndex);
          cont++;

          if (aciertos == palabraSecreta.length) {
            ganaste();
          }
        } else if (cont === 0) {
          errores++;
          dibujarLetraIncorrecta(teclaPresionada);
          dibujarErrores();
          check = false;
        } else {
          check = false;
          letrasCorrectas.add(teclaPresionada);
        }
      }
    }
  }
  letra.value = "";
}
