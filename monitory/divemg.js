var emg;

window.onload = function(){
    emg = document.getElementById("emg");

    var emergencia = document.getElementById("emergencia");
    emergencia.onclick = mostrar;

    emg.classList.add("esconde");
}

function mostrar(){
    emg.classList.remove("esconde");
}


