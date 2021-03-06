import React from 'react'
import styled from 'styled-components'
import { useRouter } from "next/router"
//import ReactDOM from 'react-dom'
//import Modal from 'react-modal'
import TransferModal from './modal/TransferModal'
import Link from 'next/link'

Modal.setAppElement("#__next")

const Header = ({walletAddress, connectWallet}) => {
  const router = useRouter()

    return (
    <Wrapper>
        <Title>Ativos</Title>
        <ButtonsContainer>
       
          <WalletLink>
            <WalletLinkTitle>
              Wallet Connected
              </WalletLinkTitle>
            <WalletAddress>
              {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
            </WalletAddress>
          </WalletLink>


    <Button style={{ backgroundColor: '#3773f5', color: '#000' }}>
    Comprar / Vender
    </Button>
        <Link href={"/?transfer=1"}>
          <Button>Enviar / Receber</Button>
        </Link>
        </ButtonsContainer>
        
      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
      >
        <TransferModal
          thirdWebTokens={thirdWebTokens}
          sanityTokens={sanityTokens}
          walletAddress={walletAddress}
        />
      </Modal>
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

const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 50rem;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const WalletLinkTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`

const WalletAddress = styled.div`
  font-size: 0.8rem;
`
