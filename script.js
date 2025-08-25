const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
enunciado: "Você costuma prestar atenção nas aulas?"[
            {
                texto: "Sim, presto bastante atenção "
                afirmacao: " Eu me esforço para aprender e absorver o conteúdo "
                
             "
            },
            {
                texto: "Não, me distraio com facilidade",
                afirmacao: "Às vezes deixo as distrações me afastarem dos estudos."
            }
        ]
    },
    {
        enunciado: " Você faz as tarefas de casa?
",
        alternativas: [
            {
                texto: "Sim, sempre faço",
                afirmacao: "Cumpro minhas responsabilidades como estudante."
            },
            {
                texto: "Não, quase nunca",
                afirmacao: "Nem sempre priorizo minhas obrigações escolares"
            }
        ]
    },
    {
        enunciado: "Como você lida com os professores?
",
        alternativas: [
            {
                texto: "Respeito e escuto o que eles falam ",
                afirmacao: "Sei reconhecer a importância do professor"
            },
            {
                texto: "Não tenho paciência ",
                afirmacao: "Às vezes não valorizo o esforço deles"
            }
        ]
    },
    {
        enunciado: "Você participa das atividades em sala?",
        alternativas: [
            {
                texto: "Sim, gosto de participar",
                afirmacao: "busco aproveitar as oportunidades de aprendizado"
            },
            {
                texto: " Não, prefiro ficar quieto",
                afirmacao: "Costumo me isolar e participar pouco"
            }
        ]
    },
    {
        enunciado: "Você estuda para as provas?",
        alternativas: [
            {
                texto: "Sim, reviso os conteúdos ",
                afirmacao: "mostro dedicação para alcançar bons resultados"
            },
            {
                texto: "Não, quase nunca estud",
                afirmacao: "Confio na sorte ou deixo para a última hora"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();