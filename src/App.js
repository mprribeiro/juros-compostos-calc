import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [initialValue, setInitialValue] = useState(1000);
  const [monthlyFee, setMonthlyFee] = useState(0.1);
  const [time, setTime] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    let vector = [];
    let initVal = initialValue;
    let sumValue = 0;

    for (let i = 1; i <= time; i++) {
      let value = initVal * (monthlyFee / 100);
      sumValue = sumValue + value;
      let percentage = (sumValue / initialValue) * 100;

      let variable = {
        id: i,
        initialValue: initVal + value,
        value: sumValue,
        percentage: percentage,
      };

      initVal += value;
      vector.push(variable);
    }

    setInstallments(vector);
  }, [initialValue, time, monthlyFee]);

  const setAmount = async (amount) => {
    await setInitialValue(amount);
  };

  const setFee = async (fee) => {
    await setMonthlyFee(fee);
  };

  const setPeriod = async (period) => {
    await setTime(period);
  };

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Cálculo de Juros Compostos</h3>
      <Form
        value={initialValue}
        fee={monthlyFee}
        time={time}
        setAmount={setAmount}
        setFee={setFee}
        setTime={setPeriod}
      />
      <Installments installments={installments} />
    </div>
  );
}
