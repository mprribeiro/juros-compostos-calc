import React from 'react';
import Installment from './Installment';
import css from './installment.module.css';

export default function Installments({ installments }) {
  return (
    <div className={`${css.border} ${css.flexRow}`}>
      {installments.map(({ id, initialValue, value, percentage }) => {
        return (
          <Installment
            key={id}
            initialValue={initialValue}
            value={value}
            percentage={percentage}
            ident={id}
          />
        );
      })}
    </div>
  );
}
