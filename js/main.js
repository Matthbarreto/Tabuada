
function tabuada(){
    var valor = document.querySelector("#num").value;
    var numero = document.querySelector("#end").value;
    var numrepeticao = parseFloat(numero);
    var resultado = document.querySelector('#resultado');
    var i = 0;

    if(valor == '' || numero == ''){
        alert("Digite algum valor nos campos abaixo.")
    } else{
        resultado.innerHTML =`A tabuada do ${valor} é:`;
        do {
            var total = Number(valor) * i;
            resultado.innerHTML +=`<span>${valor} X ${i} = ${total}</span>`;
            i++;
        } while (i <= numrepeticao);
    }
}