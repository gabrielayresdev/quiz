import React from 'react';
import Pergunta from './Pergunta';
import Resultado from './Resultado';
import './Reset.css';
import styles from './App.module.css';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);
  const botaoAvancar = React.useRef();

  function onChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function voltaPergunta() {
    if (slide > 0) {
      botaoAvancar.current.innerText = 'Próxima';
      setSlide(slide - 1);
    }
  }

  function avancaPergunta() {
    if (slide === perguntas.length - 2) {
      setSlide(slide + 1);
      botaoAvancar.current.innerText = 'Concluir';
    } else if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      concluir();
    }
  }

  function concluir() {
    let total = '0';
    perguntas.map((pergunta) => {
      if (pergunta.resposta === respostas[pergunta.id]) {
        total++;
      }
      return 0;
    });
    setResultado(total);
  }

  return (
    <>
      <div className={styles.perguntas}>
        {perguntas.map((pergunta, index) => (
          <Pergunta
            key={index}
            active={slide === index}
            pergunta={pergunta.pergunta}
            opcoes={pergunta.options}
            id={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={onChange}
            slide={slide + 1}
            totalDeSlides={perguntas.length}
          />
        ))}
        {resultado && (
          <Resultado acertos={resultado} total={perguntas.length} />
        )}
        {!resultado && (
          <div className={styles.botoes}>
            <button className={styles.botao} onClick={voltaPergunta}>
              Anterior
            </button>
            <button
              className={styles.botao}
              onClick={avancaPergunta}
              ref={botaoAvancar}
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
