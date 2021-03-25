import React, { useState } from 'react';
import { DashBoard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';



export function App() {
  const [isNewTransactionModalOpen,setisNewTransactionModalOpen]  = useState(false);

    function handleOpenNewTransactionModal(){
        setisNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setisNewTransactionModalOpen(false)
    }

  return (
    <>
    
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <DashBoard />
      <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      
      />
    <GlobalStyle />
    </>
  );
}


