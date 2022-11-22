var nombrePatron = "^[a-z A-Z]{3,30}$";
var apellido1Patron = "^[a-z A-Z]{3,30}$";
var apellido2Patron = "^[a-z A-Z]{3,30}$";
var emailPatron = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";

function standar(idIntroducido, patron) {
	return $(idIntroducido).val().trim().match(patron) ? true : false;
}
function confirmaEmail(idEmail, idEmail_confirmacion){
    let idEmail1 =$(idEmail).val().trim();
    let idEmail2 =$(idEmail_confirmacion).val().trim();
    if(idEmail1==idEmail2){
        return true;
    }else{
        return false;
    }
}

function activarBoton (idFormulario) {
	$(idFormulario + " button.submit").removeAttr("disabled");
}
function desactivarBoton (idFormulario) {
	$(idFormulario + " button.submit").attr("disabled", "disabled");
}

function formulario(idFormulario){
    $(idFormulario + " *").on("change keydown", function() {

        if(standar("#nombre", nombrePatron) && 
        standar("#primer_apellido", apellido1Patron) && 
        standar("#segundo_apellido", apellido2Patron) && 
        standar("#email", emailPatron) &&
        confirmaEmail("#email","#email_confirmacion")
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
