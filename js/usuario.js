
$("#enviar1").click(function (){
   /*Captura de datos escrito en los inputs*/        
   var nombre_ = document.getElementById("nombre").value;
   var apellido1 = document.getElementById("primer_apellido").value;
   var apellido2 = document.getElementById("segundo_apellido").value;
   var email_ = document.getElementById("email").value;
   

   /*Guardando los datos en el LocalStorage*/
   localStorage.setItem("Nombre", nombre_);
   localStorage.setItem("Primer apellido", apellido1);
   localStorage.setItem("Segundo apellido", apellido2);
   localStorage.setItem("Email", email_);
   /*Limpiando los campos o inputs*/
   document.getElementById("nombre").value = "";
   document.getElementById("primer_apellido").value = "";
   document.getElementById("segundo_apellido").value = "";
   document.getElementById("email").value = "";

});

 
  $("#enviar2").click(function (){
     /*Captura de datos escrito en los inputs*/        
     var pais_ = document.getElementById("pais").value;
     var codigoPostal = document.getElementById("codigo_postal").value;
     var ciudad_ = document.getElementById("ciudad").value;
     var provincia_ = document.getElementById("provincia").value;
     var direccion_ = document.getElementById("direccion").value;
     var piso_ = document.getElementById("piso").value;
     var escalera_ = document.getElementById("escalera").value;
     var numero_ = document.getElementById("numero").value;
     
  
     /*Guardando los datos en el LocalStorage*/
     localStorage.setItem("Pais", pais_);
     localStorage.setItem("Codigo Postal", codigoPostal);
     localStorage.setItem("Ciudad", ciudad_);
     localStorage.setItem("Provincia", provincia_);
     localStorage.setItem("Direccion", direccion_);
     localStorage.setItem("Piso", piso_);
     localStorage.setItem("Escalera", escalera_);
     localStorage.setItem("Numero", numero_);
     /*Limpiando los campos o inputs*/
     document.getElementById("pais").value = "";
     document.getElementById("codigo_postal").value = "";
     document.getElementById("ciudad").value = "";
     document.getElementById("provincia").value = "";
     document.getElementById("direccion").value = "";
     document.getElementById("piso").value = "";
     document.getElementById("escalera").value = "";
     document.getElementById("numero").value = "";
  
  });

 
    $("#enviar3").click(function (){
       /*Captura de datos escrito en los inputs*/        
       var fechaNacimiento = document.getElementById("fecha").value;
       var dniNie = document.getElementById("dni").value;
       var prefijo_ = document.getElementById("prefijo").value;
       var telefonoMovil = document.getElementById("tlf_movil").value;
       var telefonoFijo = document.getElementById("tlf_fijo").value;
       
    
       /*Guardando los datos en el LocalStorage*/
       localStorage.setItem("Fecha Nacimiento", fechaNacimiento);
       localStorage.setItem("DNI/NIE", dniNie);
       localStorage.setItem("Prefijo", prefijo_);
       localStorage.setItem("Telefono Movil", telefonoMovil);
       localStorage.setItem("Telefono Fijo", telefonoFijo);
       /*Limpiando los campos o inputs*/
       document.getElementById("fecha").value = "";
       document.getElementById("dni").value = "";
       document.getElementById("prefijo").value = "";
       document.getElementById("tlf_movil").value = "";
       document.getElementById("tlf_fijo").value = "";
    
    });
 
  
    $("#enviar4").click(function (){
       /*Captura de datos escrito en los inputs*/        
       var iban = document.getElementById("cuenta_bancaria").value;
       var swift_ = document.getElementById("swift").value;

       /*Guardando los datos en el LocalStorage*/
       localStorage.setItem("Cuenta Bancaria", iban);
       localStorage.setItem("Swift", swift_);

       /*Limpiando los campos o inputs*/
       document.getElementById("cuenta_bancaria").value = "";
       document.getElementById("swift").value = "";

    });
 
 
