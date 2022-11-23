var patronCuentaBancaria= "^[A-Z]{2}[0-9]{22}$";

//Función que valida la cuenta bancaria
function validacionCuentaBancaria(idCuenta, patronCuentaBancaria){
    return $(idCuenta).val().trim().match(patronCuentaBancaria) ? true : false;
}


$("#cuenta_bancaria").change(function(){
    console.log("si");
if(validacionCuentaBancaria("#cuenta_bancaria")){
    console.log("so");
    var resultado=document.getElementById("cuenta_bancaria").value;
    console.log(resultado);
    var codigo_swift=resultado.substring(4,8);
    console.log(codigo_swift);
    
    var swift_1=obtenerSwift(codigo_swift);
    console.log(swift_1);
    var swift_2 =document.getElementById("swift");
    swift_2.value=swift_1;
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
        if(validacionCuentaBancaria("#cuenta_bancaria")
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