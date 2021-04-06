console.log("Funciona");



window.addEventListener("load",function(){
    var btnWork=document.getElementById('btn01');
    btnWork.addEventListener("click",anotarPunto_1);
});

function anotarPunto_1(){
    var punto1a = prompt("Primer lanzamiento");
    var tiro1a = document.querySelector("#fr_01");
    if (punto1a != 10) {
        tiro1a.innerHTML = punto1a;
        var btnWork=document.getElementById('btn01');
        btnWork.removeEventListener("click", anotarPunto_1);
        btnWork.addEventListener("click",anotarPunto_2);
        var btn1 = document.querySelector("#btn01");
        btn1.innerHTML = "Segundo lanzamiento";
    } else {
        tiro1a.innerHTML = "X";
        var btn1 = document.querySelector("#btn01");
        btn1.innerHTML = "Reescribir puntuación";
    }
};

function anotarPunto_2(){
    var punto1b = prompt("Segundo lanzamiento");
    var tiro1a = document.querySelector("#fr_01");
    tiro1a.innerHTML += " " + punto1b;

    var btnWork=document.getElementById('btn01');
    btnWork.removeEventListener("click", anotarPunto_2);
    btnWork.addEventListener("click",anotarPunto_1);

    var btn1 = document.querySelector("#btn01");
    btn1.innerHTML = "Reescribir puntuación";
};