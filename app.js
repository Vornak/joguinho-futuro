
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



    idade = parseInt(document.getElementById("idade").value) 

    function remove(arr, modificador){
        for (let i = 0; i < idade; i++) {
            const index1 = i % arr.length;
            const index2 = i % arr.length-1;
            if(index2 === undefined){
              index2 = i % arr.length
            }
            // const el = arr[index];
            // console.log(`Elemento ${i + 1}: ${el}`);

            c = document.getElementById("encheLinguica")
            l = document.getElementById("encheLinguica2")
        
            if (i === idade - 1) {
              if(modificador==1){
                let newArr = arr[index1]; 
                console.log(newArr);
                return c.innerHTML = newArr
              }else if(modificador==2){
                let newArr = arr[index2]; 
                console.log(newArr);
                return c.innerHTML = newArr
              }else if(modificador==3){
                let newArr = arr[index1]; 
                console.log(newArr);
                return c.innerHTML = newArr
              }else if(modificador==4){
                let newArr = arr[index2]; 
                console.log(newArr);
                return c.innerHTML = newArr
              }
            }
          }
    }

    // setTimeout(remove(casamento, 1, ), 5000)
    // setTimeout(remove(lugar,2), 5000)

    // setTimeout(remove(dinheiro,3), 5000)
    // setTimeout(remove(filhos,4), 5000)

    remove(casamento, 1)
    remove(lugar,2)
    remove(dinheiro,3)
    remove(filhos,4)

    
    teste = document.getElementById("encheLinguica")

    

  
  
  
  

    
}







