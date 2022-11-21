var numero="^[0-9]{8}[A-Z]{1}||[X,Y,Z]{1}[0-9]{7}[A-Z]{1}$";
let date = new Date()

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let fechaActual=year*10000+month*100+day;

console.log(document.getElementById(fecha));

console.log(fechaActual);

$("#fecha").change(function(){
    var valor=$(this).val();
    
});
function fechaNacimiento(idFecha, fechaActual){
    return $(idFecha).val() < fechaActual ? true : false;
}

function validacionDniNie(idDniNie){
    return $(idDniNie).val().trim().match(patron) ? true : false;
}