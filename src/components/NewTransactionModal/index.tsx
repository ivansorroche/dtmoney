import Modal from 'react-modal' 

interface newTransactionModalPorps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose }:newTransactionModalPorps) {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  />

  );
}