import React from 'react'
import styled from 'styled-components'

const Promos = () => {
  return (
    <Wrapper>
  
    <OfferCard>
      <Title>Rendimento do ganho</Title>
      <Description>Ganhe até 2,84% APY em sua criptomoeda</Description>
      <Placeholder />
      <Additional style={{ fontSize: '1.5rem' }}>
        $0.000066 <span>2.84% APY</span>
      </Additional>
    </OfferCard>
  
    <OfferCard>
        <Title>Aprenda & Ganhe</Title>
        <Description>Ganhe até 2,84% APY em sua criptomoeda</Description>
        <Placeholder />
        <Additional style={{ color: '#3773f5' }}>Verifque Identidade</Additional>
      </OfferCard>
    </Wrapper>
  )
}

export default Promos


const Wrapper = styled.div`
  margin-top: 2rem;
  padding-right: 1rem;
`

const OfferCard = styled.div`
  width: 21rem;
  height: 11rem;
  border: 1px solid #282b2f;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`

const Description = styled.div`
  font-size: 1.1rem;
`

const Placeholder = styled.div`
  flex: 1;
`

const Additional = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`