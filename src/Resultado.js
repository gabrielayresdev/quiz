import React from 'react';
import styles from './Resultado.module.css';

const Resultado = ({ acertos, total }) => {
  return (
    <div className={styles.resultado}>
      <div className={styles.cabeca}>
        <h1>Resultado:</h1>
      </div>
      <div className={styles.corpo}>
        <div className={styles.total}>
          {acertos}/{total}
        </div>
      </div>
    </div>
  );
};

export default Resultado;
