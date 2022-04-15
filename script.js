var valor = document.querySelector("div.container input")
var tabuada = document.querySelector("div.container div.tabuada")
const calcular = document.querySelector("div.container button")


calcular.addEventListener("click", () => {

    tabuada.innerHTML = ""

    if(Number(valor.value) < 1 ){        

        tabuada.innerHTML = "Insira um valor válido"

    }else{

    
        for(i = ; i <= 10; i++){

            var calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value);

            var resultado = document.createElement("p")

            resultado.innerText = calc

            tabuada.appendChild(resultado)

        }

    }

})