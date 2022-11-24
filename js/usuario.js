

var usuario ={
    Nombre: document.getElementById(nombre),
    PrimerApellido: document.getElementById(primer_apellido),
    SegundoApellido: document.getElementById(segundo_apellido),
    Email: document.getElementById(email),
    Pais: document.getElementById(pais),
    CodigoPostal: document.getElementById(codigo_postal),
    Ciudad: document.getElementById(ciudad),
    Provincia: document.getElementById(provincia),
    Direccion: document.getElementById(direccion),
    Numero: document.getElementById(numero),
    Piso: document.getElementById(piso),
    Escalera: document.getElementById(escalera),
    FechaNacimiento: document.getElementById(fecha),
    DniNie: document.getElementById(dni),
    Prefijo: document.getElementById(prefijo),
    TelefonoMovil: document.getElementById(tlf_movil),
    TelefonoFijo: document.getElementById(tlf_fijo),
    Iban: document.getElementById(cuenta_bancaria),
    Swift: document.getElementById(swift)


}
//Comprobamos si el navegador es compatible
if (typeof(Storage) !== "undefined") {
    // LocalStorage disponible
  } else {
    // LocalStorage no soportado en este navegador
  }
  
//Guardamos el objeto en el LocalStorage
localStorage.setItem("usuario", JSON.stringify(usuario));

//Sacamos el objeto del LocalStorage
JSON.parse(localStorage.getItem("usuario"));

  