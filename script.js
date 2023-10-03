const titulo = document.getElementById("titulo")
const ancora = document.querySelector("a")
const listaOrdenada = document.getElementById("lista-ordenada")
const lista = document.querySelector("ul")


titulo.innerText = "Atividades PROZ"
ancora.innerText = "Site oficial da PROZ"


lista.innerHTML = `

<ul>
    <li>Elemento da lista JS 01</li>
    <li>Elemento da lista JS 02</li>
    <li>Elemento da lista JS 03</li>

</ul>
`


 
    listaOrdenada.innerHTML = `
    
    
    <ol>
        <li> 
           <a href= "https://prozeducacao.com.br">PROZ</a>
        </li>

        <li> 
            <a href= "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript</a>
        </li>
        <li> 
        
            <a href= "https://www.w3schools.com/js/">W3Schools</a>
        </li>
   
    </ol>

    ` 





