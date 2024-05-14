//alert("Hola mundo");
let adelante =document.getElementById("adelante");
let atrás =document.getElementById("atrás");
let izquierda =document.getElementById("izquierda");
let derecha =document.getElementById("derecha");
let detener =document.getElementById("detener");

let mensaje=document.getElementById("mensaje");

function callApi(estatus) {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get(
      "http://18.135.60.253/iot-car-control/back-end/apis/setRegistro.php?valorEstatus=" +
        estatus
    )
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);
      mensaje.innerHTML="Respuesta: <stromp>" + response.data + "</stromp>";
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
}

adelante.addEventListener("click", function () {
    callApi('f');
});
atrás.addEventListener("click", function () {
  callApi('b');
});
izquierda.addEventListener("click", function () {
  callApi('l');
});
derecha.addEventListener("click", function () {
  callApi('r');
});
detener.addEventListener("click", function () {
  callApi('s');
});
