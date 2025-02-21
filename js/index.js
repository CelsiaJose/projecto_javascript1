/* document.getElementById("texto").innerHTML="Meu primeiro texto em html";

        <script>
            document.write("Escrito com o documento.write") Tem quase a mesma funcao que o innerhtml
        </script>
 document.write(5+5)
 // /4ºPelo Alert
 alert("isto é um alerta ")*/
let qtd=0
let input=document.getElementById("inptTarefa")
let btn1=document.getElementById("btn_1add")
let main=document.getElementById("areaLista")// Para que a variavel criada saiba aonde color os itens 

//PEGAR O NOME DIGITADO E O ADICIONAR EM ALGUM LUGAR OU SEJA PO-LO EM UM INPUT COM UM BOTÃO
function addlista(){
   
    let newinput=input.value
    // adicionar em um input 
    //Conferir se o valor ñ é nullo nem indefinido
    if((newinput !=="") && (newinput!==null) && (newinput!==undefined))
    {  qtd++
      //Adiconalo ao imput
        let itens=` <div class="itens" id="${qtd}">
            <div onclick="marcarTarefa(${qtd})" class="item_icone">
                <i id="icone_${qtd}" class="mdi mdi-checkbox-blank-circle-outline"></i>
            </div>
            
            <div onclick="marcarTarefa(${qtd})" class="item_nome">${newinput}</div>
            <div class="item_botao">
                <button  onclick="deletar(${qtd})" class="delete">
                <i class="mdi mdi-delete">Deletar</i></button>
            </div>
            
        </div>`
        //Agora nosso main criado vai receber isto ou seja este html+ o novo adiconado+=
        main.innerHTML += itens
        //Zerar campos
        input.value=""
       
    }

}
// Dar accao ao enter 
input.addEventListener("keyup",function(event){
  if(event.key === "Enter"){
    event.preventDefault()
    btn1.click()
  }
})
// Ao clicar eu seleciono pelo id
function deletar(id){
  var tarefa=document.getElementById(id)
  tarefa.remove()

}
function marcarTarefa(id){
  var item=document.getElementById(id)
  // como ver a classe deste elemento?
  var classe=item.getAttribute("class")
  //Agora que ja sei a classe posso modifica-la
   //Uma condicão para saber o tipo de classe se é item ou item clicado
   //o item que aparece lá nao o daqui
   if(classe=="itens"){
    item.classList.add("itens_clicado")

    //pegar o valor do icone obs : o id é o mesmo que qtd
    var icone=document.getElementById("icone_"+ id)
    icone.classList.remove("mdi-checkbox-blank-circle-outline")
    icone.classList.add("mdi-checkbox-marked-circle")
   }
   else{

    item.classList.remove("itens_clicado")
    var icone=document.getElementById("icone_"+ id)
    icone.classList.remove("mdi-checkbox-marked-circle")
    icone.classList.add("mdi-checkbox-blank-circle-outline")
   }
   
  

}
