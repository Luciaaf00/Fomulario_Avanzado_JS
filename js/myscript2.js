var patron = "^[a-z A-Z]{3,50}$";

function standar(idIntroducido, patron) {
	return $(idIntroducido).val().trim().match(patron) ? true : false;
}

function esEspana(idPais){
    return $(idPais).val(value()) == "ES" ? true : false;
}

function formulario(idFormulario){
    $(idFormulario + " *").on("change keydown", function() {

        if(esEspana("#pais"))
        {
            activarBoton (idFormulario);
        }else{
            desactivarBoton(idFormulario);
        }//Fin Si
    });//Fin función

}