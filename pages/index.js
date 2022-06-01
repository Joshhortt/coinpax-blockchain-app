//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'

export default function Home() {
 
    const { address, connectWallet } = useWeb3()
    return (
      <div><button onClick={() => connectWallet('injected')}>Connect Wallet</button></div>
    )
  }
  