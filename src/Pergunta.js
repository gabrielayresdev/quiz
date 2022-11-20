import React from 'react';
import styles from './Pergunta.module.css';

const Pergunta = ({ pergunta, opcoes, id, value, onChange, active }) => {
  if (!active) return null;
  return (
    <div className={styles.pergunta}>
      <legend className={styles.pergunta_titulo}>{pergunta}</legend>
      <div className={styles.opcoes}>
        {opcoes.map((opcao) => (
          <label
            key={opcao}
            className={styles.opcao}
            style={
              value === opcao
                ? { backgroundColor: '#68E8E3', color: '#4a71d4' }
                : null
            }
          >
            <input
              id={id}
              type="radio"
              value={opcao}
              onChange={onChange}
              checked={value === opcao}
            />
            {opcao}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Pergunta;
