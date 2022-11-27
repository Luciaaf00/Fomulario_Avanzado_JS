  
    $("#enviar3").click(function (){
        /*Captura de datos escrito en los inputs*/        

        var dniNie = document.getElementById("dni").value;
        var prefijo_ = document.getElementById("prefijo").value;
        var telefonoMovil = document.getElementById("tlf_movil").value;
        var telefonoFijo = document.getElementById("tlf_fijo").value;
        
     
        /*Guardando los datos en el LocalStorage*/

        localStorage.setItem("DNI/NIE", dniNie);
        localStorage.setItem("Prefijo", prefijo_);
        localStorage.setItem("Telefono Movil", telefonoMovil);
        localStorage.setItem("Telefono Fijo", telefonoFijo);
        /*Limpiando los campos o inputs*/

        document.getElementById("dni").value = "";
        document.getElementById("prefijo").value = "";
        document.getElementById("tlf_movil").value = "";
        document.getElementById("tlf_fijo").value = "";
     
     });
