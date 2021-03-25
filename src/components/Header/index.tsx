import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { 
    Container,
    Content
 } from './styles'

 interface HeaderProps{
     onOpenNewTransactionModal:() => void;
 }

export const Header = ({onOpenNewTransactionModal}:HeaderProps) => {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt-money"/>
                <button onClick={onOpenNewTransactionModal} type="button">Nova Transação</button>
            </Content>
        </Container>
    )
}