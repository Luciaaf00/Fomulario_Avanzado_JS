var patron = "^[a-z A-Z]{3,50}$";
var codigoPostal="^[0-9]{5}$";
var numero="^[0-9]{1,4}$";
var errorCodigoPostal=document.getElementById("codigo_postal_error");
var errorCiudad=document.getElementById("ciudad_error");
var errorProvincia=document.getElementById("provincia_error");
var errorDireccion=document.getElementById("direccion_error");
var errorNumero=document.getElementById("numero_error");

function standar(idIntroducido, patron) {
	return $(idIntroducido).val().trim().match(patron) ? true : false;
}

let esEspama=true;
let paisSeleccionado=true;
$("#pais").change(function(){
    var valor=$(this).val();
    if(valor!="select" && valor!=null){
        console.log("aqi")
        if(valor=="ES"){
            esEspama=true;
        }else{
            esEspama=false;
        }//Fin si
        paisSeleccionado=true;
        $(".parte2").show();
    }else{
        $(".parte2").hide();
        paisSeleccionado=false;
    }
    
});
/*Validaciones*/
$("#codigo_postal").change(function(){
    if(!standar("#codigo_postal", codigoPostal)){
        errorCodigoPostal.innerHTML = "Tiene que introducir un número de cinco cifras" 
    } 
    });
    $("#ciudad").change(function(){
    if(!standar("#ciudad", patron)){
        errorCiudad.innerHTML = "Tiene que introducir una ciudad de mínimo tres letras y máximo 50 letras" 
    } 
    });
    $("#provincia").change(function(){
    if(!standar("#provincia", patron)){
        errorProvincia.innerHTML = "Tiene que introducir una provincia de mínimo tres letras y máximo 50 letras" 
    }
    });
    $("#direccion").change(function(){ 
    if(!standar("#direccion", patron)){
        errorDireccion.innerHTML = "Tiene que introducir una dirección de mínimo tres letras y máximo 50 letras" 
    } 
    });
    $("#numero").change(function(){
        if(!standar("#numero", numero)){
            errorNumero.innerHTML = "Tiene que introducir un número de mínimo 1 cifra y máximo 4 cifras" 
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
        if(standar("#provincia", patron) &&
        standar("#direccion", patron) &&
        standar("#numero", numero) &&
        standar("#ciudad", patron) &&
        paisSeleccionado==true){
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
$("#enviar2").click(function (){
    /*Captura de datos escrito en los inputs*/        
    var pais_ = document.getElementById("pais").value;
    var codigoPostal = document.getElementById("codigo_postal").value;
    var ciudad_ = document.getElementById("ciudad").value;
    var provincia_ = document.getElementById("provincia").value;
    var direccion_ = document.getElementById("direccion").value;
    var piso_ = document.getElementById("piso").value;
    var escalera_ = document.getElementById("escalera").value;
    var numero_ = document.getElementById("numero").value;
    
 
    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem("Pais", pais_);
    localStorage.setItem("Codigo Postal", codigoPostal);
    localStorage.setItem("Ciudad", ciudad_);
    localStorage.setItem("Provincia", provincia_);
    localStorage.setItem("Direccion", direccion_);
    localStorage.setItem("Piso", piso_);
    localStorage.setItem("Escalera", escalera_);
    localStorage.setItem("Numero", numero_);
    /*Limpiando los campos o inputs*/
    document.getElementById("pais").value = "";
    document.getElementById("codigo_postal").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("provincia").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("piso").value = "";
    document.getElementById("escalera").value = "";
    document.getElementById("numero").value = "";
    
 });
$(function() {
	formulario("#contacto1");
});
