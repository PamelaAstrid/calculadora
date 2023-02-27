let boton = document.getElementById('sumar');
let boton2 = document.getElementById('restar');
let boton3 = document.getElementById('multiplicar');
let boton4 = document.getElementById('dividir');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacersuma);
boton2.addEventListener('click', haceresta);
boton3.addEventListener('click', hacermult);
boton4.addEventListener('click', hacerdiv);



function hacersuma(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1+n2; 
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

function haceresta(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1-n2; 
    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;

}

function hacermult(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1*n2; 
    respuesta.innerHTML=`El resultado de la multiplicación es: ${n3}`;

}

function hacerdiv(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1/n2; 
    respuesta.innerHTML=`El resultado de la división es: ${n3}`;

}