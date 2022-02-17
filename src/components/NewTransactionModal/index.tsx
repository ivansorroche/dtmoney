import Modal from 'react-modal' 
import { Container } from './styles';

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
    <Container>
      <h2>Formulario</h2>

      <input
        placeholder='Título' />

      <input 
        type="Number"
        placeholder='Valor'/>

        <input
          placeholder='Categoria' />

        <button type="submit">
          Cadastrar
        </button>

    </Container>
    </Modal>

  );
}