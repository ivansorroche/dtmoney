import Modal from 'react-modal' 
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles';

interface newTransactionModalPorps { 
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose }:newTransactionModalPorps) {
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
    <Container>
      <h2>Formulario</h2>

      <input
        placeholder='Título' />

      <input 
        type="Number"
        placeholder='Valor'/>

      <TransactionTypeContainer>
        <button 
          type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
        </button>

        <button 
          type="button">
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
        </button>

      </TransactionTypeContainer>

      <input
        placeholder='Categoria' />

      <button type="submit">
        Cadastrar
      </button>

    </Container>
    </Modal>

  );
}