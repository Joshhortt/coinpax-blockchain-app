//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'

export default function Home() {
 // add button
    const { address, connectWallet } = useWeb3()
    return (
      <Wrapper>
        <WalletConnect>
        <Button onClick={() => connectWallet('injected')}>
      Connect Wallet
        </Button>
      </WalletConnect>
    </Wrapper>
    )
  }

  // add styles

  const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
`

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  /* flex: 0; */
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`