import { DashBord } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal' 
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

//utilizado para acessibilidade, está na doc do react-modal
Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <div>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <DashBord />
      <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}  />


    </div>
  );
}

