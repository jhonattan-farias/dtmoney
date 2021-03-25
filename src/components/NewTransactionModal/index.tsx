import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer,RadioBox } from './styles';


Modal.setAppElement('#root')

interface newTransactionsModalProps {
    isOpen:boolean;
    onRequestClose:() => void;
}

export const NewTransactionModal = ({isOpen,onRequestClose}:newTransactionsModalProps) => {
    const [title,setTitle] = useState('')
    const [value,setValue] = useState('')
    const [category,setCategory] = useState('')

    const [type,setType] = useState('deposit')

    function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault()
    }

    return(
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}
        className='react-modal-overlay'
        >
            
            <Container
            className='react-modal-content'
            onSubmit={handleCreateNewTransaction}
            >
                <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
                 >
                <img src={closeImg} alt="gechar modal"/>
                </button>

                <h2>Cadastrar Transação</h2>

                <input placeholder='Titulo' />
                <input type="number" placeholder='valor' />

                <TransactionTypeContainer>
                    <RadioBox
                     type="button"
                     onClick={() => setType('deposit')}
                     isActive={type === 'deposit'}
                     activeColor={'green'}
                     >
                    <img src={incomeImg} alt="entrada"/>
                    <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                     type="button"
                     onClick={() => setType('withdrawn')}
                     isActive={type === 'withdrawn'}
                     activeColor={'red'}
                     >
                    <img src={outcomeImg} alt="Saida"/>
                    <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input placeholder="categoria"/>
                <button 
                    type='submit'
                    >Cadastrar</button>
            </Container>

          </Modal>
    )
}