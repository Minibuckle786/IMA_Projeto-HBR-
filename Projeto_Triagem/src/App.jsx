import { useState } from "react";

function App() {
  // Estado que controla onde estamos na árvore
  const [etapa, setEtapa] = useState("q1");

  // Estrutura da triagem
  const triagem = {
    perguntas: {
      q1: {
        texto: "Você possui EG?",
        opcoes: [
          { texto: "Sim", proximo: "q2" },
          { texto: "Não", proximo: "r1" }
        ]
      },
      q2: {
        texto: "Qual tipo de EG?",
        opcoes: [
          { texto: "Tipo A", proximo: "r2" },
          { texto: "Tipo B", proximo: "r3" }
        ]
      }
    },
    resultados: {
      r1: {
        titulo: "Atendimento padrão",
        descricao: "Dirigir-se à unidade mais próxima."
      },
      r2: {
        titulo: "Especialista A",
        descricao: "Levar documentos médicos."
      },
      r3: {
        titulo: "Especialista B",
        descricao: "Necessário encaminhamento."
      }
    }
  };

  // Se for resultado
  if (triagem.resultados[etapa]) {
    const resultado = triagem.resultados[etapa];

    return (
      <div>
        <h2>Resultado</h2>
        <h3>{resultado.titulo}</h3>
        <p>{resultado.descricao}</p>

        <button onClick={() => setEtapa("q1")}>
          Reiniciar
        </button>
      </div>
    );
  }

  // Se for pergunta
  const pergunta = triagem.perguntas[etapa];

  return (
    <div>
      <h2>Triagem</h2>
      <p>{pergunta.texto}</p>

      {pergunta.opcoes.map((opcao, index) => (
        <button
          key={index}
          onClick={() => setEtapa(opcao.proximo)}
        >
          {opcao.texto}
        </button>
      ))}
    </div>
  );
}

export default App;
