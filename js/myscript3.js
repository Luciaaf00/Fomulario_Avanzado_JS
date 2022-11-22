

//Validación de una fecha
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let fechaActual=year*10000+month*100+day;

console.log(document.getElementById(fecha));

console.log(fechaActual);
let esFechaCorrecta=false;
$("#fecha").change(function(){
    var fechaIntroducida=$(this).val();
    console.log(fechaIntroducida);
    var fechaSinGuiones=fechaIntroducida.replaceAll("-", "");
    console.log(fechaSinGuiones);
    var fechaDefinitiva=parseInt(fechaSinGuiones);
    console.log(fechaDefinitiva);

    if(fechaActual>=fechaDefinitiva){
        esFechaCorrecta=true;
    }else{
        esFechaCorrecta=false;
    }
    console.log(esFechaCorrecta);
});


let esIdentificacionCorrecta=false;
$("#dni").change(function(){
    var documentoIdentificador=$(this).val();
    var validacionCaracteres="TRWAGMYFPDXBNJZSQVHLCKE";
    var nifExpresion=/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    var nieExpresion=/^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    var cadena=documentoIdentificador.toString().toUpperCase();
    console.log(documentoIdentificador);
    if(!nifExpresion.test(cadena) && !nieExpresion.test(cadena)) {
        esIdentificacionCorrecta=false;
        console.log("hola")
    }else{
       var longitud =cadena.length-1;
        var nie = cadena.substr(0,longitud);
        console.log(nie);
        nie=nie.replace("X", "0").replace("Y", "1").replace("Z", "2");
        console.log(nie);
        var letra=cadena.substr(-1);
        console.log(letra);
        var calculoChar=parseInt(nie.substr(0,8))%23;
        console.log(calculoChar);
        if(validacionCaracteres.charAt(calculoChar)===letra){
            console.log(validacionCaracteres.charAt(calculoChar));
            esIdentificacionCorrecta=true;
        }else{
            esIdentificacionCorrecta=false;
        }
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

        if(esFechaCorrecta==true && esIdentificacionCorrecta==true){
            activarBoton (idFormulario);
        }else{
            desactivarBoton(idFormulario);
        }//Fin Si
    });//Fin función

}
$(function() {
	formulario("#contacto1");
});
