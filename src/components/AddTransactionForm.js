import React, { useContext } from 'react';
import useInput from '../hooks/useInput';
import { GlobalContext } from '../context/GlobalState';

const AddTransactionForm = () => {
  const [textProps, resetText] = useInput('');
  const [amountProps, resetAmount] = useInput(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: textProps.value,
      amount: +amountProps.value,
    };

    addTransaction(newTransaction);
    resetText();
    resetAmount();
  };

  return (
    <>
      <h3>Añadir nueva transacción</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Nombre</label>
          <input type="text" {...textProps} placeholder="Nombre..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Cantidad <br />
            (negativo - gasto, positivo - ingreso)
          </label>
          <input type="number" {...amountProps} placeholder="Cantidad..." />
        </div>
        <button className="btn">Añadir transacción</button>
      </form>
    </>
  );
};

export default AddTransactionForm;
