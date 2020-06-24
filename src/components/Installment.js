import React from 'react';
import css from './installment.module.css';
import { formatNumber, formatPercentage } from './helpers/formatHelpers';

export default function Installment({
  ident,
  initialValue,
  value,
  percentage,
}) {
  return (
    <div
      style={{ marginLeft: '8px', borderRadius: '5px' }}
      className="card horizontal"
    >
      <div className={`card-image ${css.icon}`}>
        <i
          style={{ fontSize: '50px', marginTop: '43px' }}
          className="material-icons"
        >
          {percentage >= 0 ? 'trending_up' : 'trending_down'}
        </i>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <div className={css.flexColumn}>
            <span style={{ fontWeight: 'bold' }}>{ident}º mês</span>
            <hr />
            <span className={percentage >= 0 ? css.pos : css.neg}>
              <strong style={{ color: 'black' }}>Montante: </strong>
              {formatNumber(initialValue)}
            </span>
            <span className={percentage >= 0 ? css.pos : css.neg}>
              <strong style={{ color: 'black' }}>Juros: </strong>
              {formatNumber(value)}
            </span>
            <span className={percentage >= 0 ? css.pos : css.neg}>
              <strong style={{ color: 'black' }}>Percentual: </strong>
              {formatPercentage(percentage)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
