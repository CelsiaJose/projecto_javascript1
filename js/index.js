/* document.getElementById("texto").innerHTML="Meu primeiro texto em html";

        <script>
            document.write("Escrito com o documento.write") Tem quase a mesma funcao que o innerhtml
        </script>
 document.write(5+5)
 // /4ºPelo Alert
 alert("isto é um alerta ")*/

let input=document.getElementById("inptTarefa")
let btn1=document.getElementById("btn_1add")
let main=document.getElementById("areaLista")// Para que a variavel criada saiba aonde color os itens 

//PEGAR O NOME DIGITADO E O ADICIONAR EM ALGUM LUGAR OU SEJA PO-LO EM UM INPUT COM UM BOTÃO
function addlista(){
   
    let newinput=input.value
    // adicionar em um input 
    //Conferir se o valor ñ é nullo nem indefinido
    if((newinput !=="") && (newinput!==null) && (newinput!==undefined))
    {
      //Adiconalo ao imput
        let itens=` <div class="itens">
            <div class="item_icone">
                <i class="mdi mdi-checkbox-blank-circle-outline"></i>
            </div>
            
            <div class="item_nome">Teste de tarefa</div>
            <div class="item_botao">
                <button class="delete">
                <i class="mdi mdi-delete">Deletar</i></button>
            </div>
            
        </div>`
        //Agora nosso main criado vai receber isto ou seja este html+ o novo adiconado+=
        main.innerHTML += itens
      
    }

}