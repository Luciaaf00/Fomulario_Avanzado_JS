//Expresiones regulares
var patronTlf="^[0-9]{9}$";


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
        }
    }
});

function validacionTlf(idTlf, patron){
    return $(idTlf).val().trim().match(patron) ? true : false;
}


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
        validacionTlf("#tlf_movil", patronTlf)
        ){
            activarBoton (idFormulario);
        }else{
            desactivarBoton(idFormulario);
        }//Fin Si
    });//Fin función

}
$(function() {
	formulario("#contacto1");
});
