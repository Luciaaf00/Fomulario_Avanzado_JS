
$("#enviar").click(function (){
let nombre_= document.getElementById(nombre).value;
let apellido1=  document.getElementById(primer_apellido).value;
let apellido2= document.getElementById(segundo_apellido).value;
let email_=document.getElementById(email).value;

});
$("#enviar2").click(function (){
  let pais_=document.getElementById(pais).value;
  let codigoPostal=document.getElementById(codigo_postal).value;
  let ciudad_=document.getElementById(ciudad).value;
  let provincia_=document.getElementById(provincia).value;
  let direccion_=document.getElementById(direccion).value;
  let numero_=document.getElementById(numero).value;
  let piso_=document.getElementById(piso).value;
  let escalera_=document.getElementById(escalera).value;
  
  
  });
  $("#enviar3").click(function (){
    let fechaNacimiento=document.getElementById(fecha).value;
    let dniNie=document.getElementById(dni).value;
    let prefijo_=document.getElementById(prefijo).value;
    let telefonoMovil=document.getElementById(tlf_movil).value;
    let telefonoFijo=document.getElementById(tlf_fijo).value;

    
    
    });

    $("#enviar4").click(function (){

      let iban=document.getElementById(cuenta_bancaria).value;
      let swift_=document.getElementById(swift).value;
      
      var usuario={
        Nombre: nombre,
        PrimerApellido: apellido1,
        SegundoApellido: apellido2,
        Email: email_,
        Pais: pais_,
        CodigoPostal: codigoPostal,
        Ciudad: ciudad_,
        Provincia: provincia_,
        Direccion: direccion_,
        Numero: numero_,
        Piso: piso_,
        Escalera: escalera_,
        FechaNacimiento: fechaNacimiento,
        DniNie: dniNie,
        Prefijo: prefijo_,
        TelefonoMovil: telefonoMovil,
        TelefonoFijo: telefonoFijo,
        Iban: iban,
        Swift: swift_

      }
      //Guardamos el objeto en el LocalStorage
      localStorage.setItem("usuario", JSON.stringify(usuario));
    });

//Comprobamos si el navegador es compatible
if (typeof(Storage) !== "undefined") {
    // LocalStorage disponible
  } else {
    // LocalStorage no soportado en este navegador
  }
  




  