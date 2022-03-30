var botonAgregar = document.querySelector("#nueva-palabra");

botonAgregar.addEventListener("click", function (evento) {
  evento.preventDefault();
  var nuevaPalabra = document.querySelector("#input-nueva-palabra").value;
    if (!palabras.includes(nuevaPalabra.toUpperCase())){
        
        palabras.push(nuevaPalabra.toUpperCase());
        console.log(palabras);
    } else {
        alert("esta palabra ya esta incluida");
    }
    document.querySelector("#input-nueva-palabra").value = "";
});

