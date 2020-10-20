/*
<!-- Botao fixado -->
<div id="botaoFixado" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
  <a href="#(ID do formularioBotao)"><button class="solOrc">Solicitar orçamento</button></a>
</div>

//~ CONFIGURAÇÃO ~ Adicionando IDs nas variáveis (ex: "#xxx" e "[id='xxxx'] quando começar com número")

//Primeira divisão
var fotoDeFundo = "[id='']"; // Mesmo ID do $idSectionPrimeiraDivisao // USAR ID DA 1ª TAG
var titulo = "[id='']"; // USAR ID DA 2ª TAG

//Segunda divisão
//TODOS (1 exceção) - USAR ID DA 2ª TAG
var fotoUm = "[id='']"; // USAR ID DA 1ª TAG
var fotoDois = "[id='']";
var fotoTres = "[id='']";
var texto = "[id='']";

//Quarta divisão
//TODOS (1 exceção) - USAR ID DA 1ª TAG
var tituloDoFormulario = "[id='']"; // Mesmo ID do $SolicitarOrcamentoTitulo // USAR ID DA ÚLTIMA TAG
var formularioBotao = ""; // Fundo da faixa "Solicitar Orçamento" - sem o "[id='']" - Mesmo ID do $quartaDivisao-solicitarOrcamento
var caixasDoFormulario = ""; // Sem o "[id='']" - Mesmo ID do $formularioCaixas
var textoDaMensagem = "Olá! Estou interessado(a) na Linha *nomeDaLinha* do Coisas do brasil. Por favor envie-me um email ou mensagem por telefone para podermos conversar sobre um orçamento.";
*/

// mostrar/esconder formulário
var botaoFormularioUm = document.getElementById(formularioBotao);
var botaoFormularioDois = document.getElementById('botaoFixado');

        function exibeFormulario() {
            this.__toggle = !this.__toggle;
            var target = document.getElementById(caixasDoFormulario);
            if( this.__toggle) {
                target.style.height = target.scrollHeight+"px";
            }
            else {
                target.style.height = 0;
            }
        }
botaoFormularioUm.onclick = exibeFormulario;
botaoFormularioDois.onclick = exibeFormulario;

// Add texto no textarea do formulário
var textArea = document.querySelector("textarea");
textArea.value = textoDaMensagem;


// Animação AOS
var fotoDeFundoPrincipal = document.querySelector(fotoDeFundo);
var tituloPrincipal = document.querySelector(titulo);
var imagemUm = document.querySelector(fotoUm);
var imagemDois = document.querySelector(fotoDois);
var imagemTres = document.querySelector(fotoTres);
var textoUm = document.querySelector(texto);
var tituloFormulario = document.querySelector(tituloDoFormulario);

fotoDeFundoPrincipal.setAttribute('data-aos', 'fade-left');

tituloPrincipal.setAttribute('data-aos', 'fade-right');
tituloPrincipal.setAttribute('data-aos-delay','500');
tituloPrincipal.setAttribute('data-aos-easing','ease-in-out');

imagemUm.setAttribute('data-aos', 'zoom-out-down');
imagemDois.setAttribute('data-aos', 'zoom-out-down');
imagemDois.setAttribute('data-aos-delay','125');
imagemTres.setAttribute('data-aos', 'zoom-out-down');
imagemTres.setAttribute('data-aos-delay','250');
textoUm.setAttribute('data-aos', 'fade-up');
textoUm.setAttribute('data-aos-delay','300');

tituloFormulario.setAttribute('data-aos', 'zoom-in');
