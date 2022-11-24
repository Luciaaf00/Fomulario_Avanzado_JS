//Sacamos el objeto del LocalStorage
ficha_usuario=JSON.parse(localStorage.getItem("usuario"));

console.log(ficha_usuario["Nombre"]);