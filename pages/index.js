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
        <button onClick={() => connectWallet('injected')}>
      Connect Wallet
        </button>
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