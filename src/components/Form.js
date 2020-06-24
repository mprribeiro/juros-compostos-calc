import React from 'react';
import css from './installment.module.css';

export default function Form({ value, fee, time, setAmount, setFee, setTime }) {
  const handleAmountChange = (event) => {
    setAmount(+event.target.value);
  };

  const handleFeeChange = (event) => {
    setFee(+event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(+event.target.value);
  };

  return (
    <div style={styles.flexRow}>
      <div className={css.inputText}>
        <span className="active" htmlFor="inputAmount">
          Montante inicial (R$):
        </span>
        <input
          id="inputAmount"
          type="number"
          min="0"
          max="100000"
          value={value}
          onChange={handleAmountChange}
        />
      </div>

      <div className={css.inputText}>
        <span className="active" htmlFor="inputFee">
          Taxa de juros mensal (%):
        </span>
        <input
          id="inputFee"
          type="number"
          min="-12"
          max="12"
          step="0.1"
          value={fee}
          onChange={handleFeeChange}
        />
      </div>

      <div className={css.inputText}>
        <span className="active" htmlFor="inputTime">
          Período (meses):
        </span>
        <input
          id="inputTime"
          type="number"
          min="1"
          max="36"
          step="1"
          value={time}
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    justifyContent: 'center',
  },
};
