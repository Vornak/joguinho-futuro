function calcula(){

    const pessoa1 = document.getElementById("pessoa1").value;
    const pessoa2 = document.getElementById("pessoa2").value;
    const pessoa3 = document.getElementById("pessoa3").value;

    const lugar1 = document.getElementById("lugar1").value;
    const lugar2 = document.getElementById("lugar2").value;
    const lugar3 = document.getElementById("lugar3").value;

    const casamento =[pessoa1, pessoa2, pessoa3]
    const dinheiro = ['rico', 'pobre', 'milhonario']
    const filhos = ['0', '1', '2', '4', '5']
    const lugar = [lugar1, lugar2, lugar3]

    const enrolando = document.getElementById("enrolando")

    idade = parseInt(document.getElementById("idade").value) 

    function remove(arr, modificador, el){

      elemento = document.getElementById(el)
      console.log(elemento)
      

      for (let i = 0; i < idade; i++) {
        const index1 = i % arr.length;
        const index2 = i % arr.length-1;
        if(index2 === undefined){
          index1 = i % arr.length
        }
        if(index2 ===undefined){
          index2 = i % arr.length
        }

        // const el = arr[index];
        // console.log(`Elemento ${i + 1}: ${el}`);
    
        if (i === idade - 1) {
          if(modificador==1){

            let newArr = arr[index1]; 
            console.log(newArr);
            return elemento.innerHTML = newArr

          }else if(modificador==2){

            let newArr = arr[index2]; 
            console.log(newArr);
            return elemento.innerHTML = newArr
          
        }
      }
  }
}

function consulta(){
  let palavras = [
    "Consultando astros...",
    "Contactando aliens..."
    
  ]

  palavraEscolhida = Math.floor(Math.random() * palavras.lenght)
  toString(palavraEscolhida)
  // enrolando.innerHTML = palavraEscolhida
  
}

// Adicione ouvintes de evento para cada elemento
elementoLugar.addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    remove(lugar, 1, "lugarF");
  }, 2000);
});

elementoFilhos.addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    remove(filhos, 1, "filhoF");
  }, 3000);
});

elementoDinheiro.addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    remove(dinheiro, 1, "dinheiroF");
  }, 4000);
});

elementoCasamento.addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    remove(casamento, 1, "casamentoF");
  }, 5000);
});

// setTimeout(function() {
//   remove(lugar, 1, "lugarF");
// }, 2000);

// setTimeout(function() {
//   remove(filhos, 1, "filhoF");
// }, 3000);

// setTimeout(function() {
//   remove(dinheiro, 1, "dinheiroF");
// }, 4000);

// setTimeout(function() {
//   remove(casamento, 1, "casamentoF");
// }, 5000);


}

