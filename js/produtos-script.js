// mostrar/esconder formulário
var botaoFormularioUm = document.getElementById('358dda31-bd1f-4bd8-8755-75e38c54f61d');
var botaoFormularioDois = document.getElementById('botaoFixado');

        function exibeFormulario() {
            this.__toggle = !this.__toggle;
            var target = document.getElementById('0514a1cb-a222-4696-9d25-4a56b464f96b');
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
textArea.value = "Olá! Estou interessado(a) na Linha Giz do Coisas do brasil. Por favor envie-me um email ou mensagem por telefone para podermos conversar sobre um orçamento.";


// Animação AOS
var fotoGiz = document.querySelector("[id='1f14d81a-ed4b-4d09-9b83-6d5365550657']");
var tituloGiz = document.querySelector('#fe59d4ff-6634-48da-aadb-3aa2723ab934');
var imagemUm = document.querySelector("[id='6d0d9726-ec1f-4fb0-834e-8bd236683e30']");
var imagemDois = document.querySelector("[id='970f5f78-713c-40e8-a492-91bfb75c19b7']");
var imagemTres = document.querySelector("[id='767ab0b5-3014-4306-8286-e66e5643798e']");
var textoUm = document.querySelector("[id='958c0c4a-6dc7-4768-b184-2876c1b1e45c']");
var tituloFormulario = document.querySelector("[id='856ad137-2e2c-4315-b071-e46831156e5a']");

fotoGiz.setAttribute('data-aos', 'fade-left');

tituloGiz.setAttribute('data-aos', 'fade-right');
tituloGiz.setAttribute('data-aos-delay','500');
tituloGiz.setAttribute('data-aos-easing','ease-in-out');

imagemUm.setAttribute('data-aos', 'zoom-out-down');
imagemDois.setAttribute('data-aos', 'zoom-out-down');
imagemDois.setAttribute('data-aos-delay','125');
imagemTres.setAttribute('data-aos', 'zoom-out-down');
imagemTres.setAttribute('data-aos-delay','250');
textoUm.setAttribute('data-aos', 'fade-up');
textoUm.setAttribute('data-aos-delay','300');

tituloFormulario.setAttribute('data-aos', 'zoom-in');

