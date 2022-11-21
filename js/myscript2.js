var patron = "^[a-z A-Z]{3,50}$";
var codigoPostal="^[0-9]{5}$";
var numero="^[0-9]{1,4}$";

function standar(idIntroducido, patron) {
	return $(idIntroducido).val().trim().match(patron) ? true : false;
}

let esEspama=true;
$("#pais").change(function(){
    var valor=$(this).val();
    if(valor=="ES"){
        esEspama=true;
    }else{
        esEspama=false;
    }//Fin si
});

function activarBoton (idFormulario) {
	$(idFormulario + " button.submit").removeAttr("disabled");
}
function desactivarBoton (idFormulario) {
	$(idFormulario + " button.submit").attr("disabled", "disabled");
}



function formulario(idFormulario){
    $(idFormulario + " *").on("change keydown", function() {
        if(standar("#provincia", patron) &&
        standar("#direccion", patron) &&
        standar("#numero", numero) &&
        standar("#ciudad", patron)){
            if(esEspama==true){
                if(standar("#codigo_postal", codigoPostal)){
                    activarBoton (idFormulario);
                }else{
                    desactivarBoton(idFormulario);
                }//Fin Si
            }else{
                activarBoton (idFormulario);
            }//Fin Si
        }else{
            desactivarBoton(idFormulario);
        }//Fin Si
    });//Fin función
}
$(function() {
	formulario("#contacto1");
});
