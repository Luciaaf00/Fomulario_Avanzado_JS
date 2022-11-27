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
        if(validacionCuentaBancaria("#cuenta_bancaria", patronCuentaBancaria)
        ){
            console.log("hola");
            activarBoton(idFormulario);
        }else{
            desactivarBoton(idFormulario);
        }//Fin Si
    });//Fin función

}
  
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
$(function() {
	formulario("#contacto1");
});