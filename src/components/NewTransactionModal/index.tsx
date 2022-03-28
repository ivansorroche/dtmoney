import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal' 
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface newTransactionModalPorps { 
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose }:newTransactionModalPorps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit');

  
  function handleCreateNewTransaction(event: FormEvent){
    //Previne que ao clicar no submit do formulario a pagina não seja recarregada    
    event.preventDefault();
    createTransaction({
      title,
      amount,
      category,
      type
    })
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt='Fechar Modal' />
      </button>
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Formulario</h2>

      <input
        placeholder='Título'
        value={title}
        onChange={event => setTitle(event.target.value)}
        />

      <input 
        type="Number"
        placeholder='Valor'
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
        />

      <TransactionTypeContainer>
        <RadioBox 
          type="button"
          onClick={() => { setType('deposit'); }}
          isActive={type === 'deposit'}
          activeColor={'green'}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
        </RadioBox>

        <RadioBox 
          type="button"
          onClick={() => { setType('withdraw')}}
          isActive={type === 'withdraw'}
          activeColor={'red'}
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
        </RadioBox>

      </TransactionTypeContainer>

      <input
        placeholder='Categoria'
        value={category}
        onChange={event => setCategory(event.target.value)}
      />

      <button type="submit">
        Cadastrar
      </button>

    </Container>
    </Modal>

  );
}