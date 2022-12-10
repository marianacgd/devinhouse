for (var i = 0; i < 10; i++){
    console.log(i);
}

var sair = false;

while (!sair){
    console.log('Entrou');
    sair = true;
}

var continuar = true;
var contador = 10;
do{
    console.log(continuar);
    contador -= 1;
    if (contador <= 0){
        continuar = false;
    }
} while(continuar);