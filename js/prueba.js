$(document).ready(function(){    
    $('#enviar1').click(function(){        
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("nombre").value;
        var apel = document.getElementById("primer_apellido").value;
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apel);
        /*Limpiando los campos o inputs*/
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
    });   
});