//Expresiones regulares
var patronTlf="^[0-9]{9}$";
//variables
var errorNacimiento=document.getElementById("error_nacimiento");
var errorDni=document.getElementById("error_dni");
var errorTlfMovil=document.getElementById("error_tlf_movil");



//Validación de una fecha
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let fechaActual=year*10000+month*100+day;

let esFechaCorrecta=false;
$("#fecha").change(function(){
    var fechaIntroducida=$(this).val();
    var fechaSinGuiones=fechaIntroducida.replaceAll("-", "");
    var fechaDefinitiva=parseInt(fechaSinGuiones);
    if(fechaActual>=fechaDefinitiva){
        esFechaCorrecta=true;
    }else{
        esFechaCorrecta=false;
        errorNacimiento.innerHTML = "Tiene que introducir una fecha anterior a la actual" 
    }
});


let esIdentificacionCorrecta=false;
$("#dni").change(function(){
    var documentoIdentificador=$(this).val();
    var validacionCaracteres="TRWAGMYFPDXBNJZSQVHLCKE";
    var nifExpresion=/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    var nieExpresion=/^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    var cadena=documentoIdentificador.toString().toUpperCase();
    if(!nifExpresion.test(cadena) && !nieExpresion.test(cadena)) {
        esIdentificacionCorrecta=false;
        errorDni.innerHTML = "Tiene que introducir un documento de identidad correcto ejemplos: 91014263C o Z2776431Z ";
    }else{
       var longitud =cadena.length-1;
        var nie = cadena.substr(0,longitud);
        nie=nie.replace("X", "0").replace("Y", "1").replace("Z", "2");
        var letra=cadena.substr(-1);
        var calculoChar=parseInt(nie.substr(0,8))%23;
        if(validacionCaracteres.charAt(calculoChar)===letra){
            esIdentificacionCorrecta=true;
        }else{
            esIdentificacionCorrecta=false;
            errorDni.innerHTML = "Tiene que introducir un documento de identidad correcto ejemplos: 91014263C o Z2776431Z ";
        }
    }
});

function validacionTlf(idTlf, patron){
    return $(idTlf).val().trim().match(patron) ? true : false;
}

function validacionCheck(idCheck) {
    return $(idCheck).is(":checked") ? true : false;
}

/*Validaciones*/
$("#tlf_movil").change(function(){
    if(!validacionTlf("#tlf_movil", patronTlf)){
        errorTlfMovil.innerHTML = "Tiene que introducir un número de tlf válido ejemplo: 666666666" 
    } 
});



function activarBoton (idFormulario) {
	$(idFormulario + " button.submit").removeAttr("disabled");
}
function desactivarBoton (idFormulario) {
	$(idFormulario + " button.submit").attr("disabled", "disabled");
}


function formulario(idFormulario){
    $(idFormulario + " *").on("change keydown", function() {
        if(esFechaCorrecta==true && 
        esIdentificacionCorrecta==true &&
        validacionTlf("#tlf_movil", patronTlf) &&
        validacionCheck("#opcion1") &&
        validacionCheck("#opcion2") &&
        validacionCheck("#opcion3")
        ){
            activarBoton (idFormulario);
        }else{
            desactivarBoton(idFormulario);
        }//Fin Si
    });//Fin función

}
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
$(function() {
	formulario("#contacto1");
});
