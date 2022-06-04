import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
    <Wrapper>
        <Title>Ativos</Title>
        <ButtonsContainer>
    <Button style={{ backgroundColor: '#3773f5', color: '#000' }}>
    Comprar / Vender
    </Button>
        <Button>
        Enviar / Receber
        </Button>
        </ButtonsContainer>
  </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
  width: calc(100%);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`

const ButtonsContainer = styled.div`
  display: flex;
`

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`
