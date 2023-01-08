tempo = 0;
timerCheck = "";
answer = "";
placar = 0;
desenho = "";

function preload(){

}

function setup(){
    canvas = creteCanvas(450, 450);
    canvas.center();
    background("white");
}

function draw(){
    checar()

    if(desenho == sketch){
        answer = "set";
        placar++;

        document.getElementById("nome").innerHTML = "Pontos: " + placar;
    }
}

function checar(){
    tempo++;
    document.getElementById("tempo").innerHTML = "Tempo: " + tempo;

    if(tempo > 400){
        tempo = 0;
        timerCheck = "completo";
    }

    if(timerCheck == "completo"||answer == "set"){
        timerCheck = "";
        answer = "";
        updateCanvas();
    }
}

function updateCanvas(){
    background("white");

    num = Math.floor((Math.random() * quickDrawDataset.length) + 1);
    sketch = quickDrawDataset[randomNumber];
    
    document.getElementById("desafio").innerHTML = "Desenhe um(a) " + sketch;
}