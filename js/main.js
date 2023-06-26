alert("Bienvenido a juego de tiro al blanco!");
let entrada=prompt("Desea participar en el juego?");
while(entrada!="si"){
   alert("Adios!");
   entrada=prompt("Desea participar en el juego?");
}
let nombre= prompt("Ingrese su nombre:");
alert("Tiene 3 tiros a favor pueden ser numeros positivos y negativos, el cero es el centro. Mucha suerte!");
let c0=0;
let c1=0;
let c2=0;
let c3=0;
let c4=0;
for(let i=1; i<=3; i++){
    let x=primertiro();
    let y=segundotiro();
    console.log("Primero " +x);
    console.log("Segundo " +y);
    let tiro=cuadrante(x,y);
    console.log("tiro"+tiro);
    switch(tiro){
        case 1:
            c1=c1+1;
            console.log("Cuadrante 1 " +c1);
            break;
        case 2:
            c2=c2+1;
            console.log("Cuadrante 2 " +c2);
            break;
        case 3:
            c3=c3+1;
            console.log("Cuadrante 3 "+ c3);
            break;
        case 4:
            c4=c4+1;
            console.log("Cuadrante 4 "+c4);
            break;
        case 0:
            c0=c0+1;
            console.log("Centro " + c0);
            break;

    }
}
let puntaje= (c1+c2)*50 + (c3+c4)*40 +(c0)*100;
alert("El participante: "+ nombre +" obtuvo el puntaje: "+ puntaje +" Gracias por jugar! Vuelva pronto");
function primertiro(){
    return prompt("Ingrese primera coordenada:")
}
function segundotiro(){
    return prompt("Ingrese segunda coordenada")
}
 function cuadrante(a,b){
    if(a>0 && b>0){
        return 1;
    }else if(a<0 && b>0){
        return 2;
    }else if(a<0 && b<0){
        return 3;
    }else if(a>0 && b<0){
        return 4;
    }else if(a==0 && b==0){
        return 0;
    }
 }
