// import React, {useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { coins } from '../static/coins'
import Coin from './Coin'
import BalanceChart from './BalanceChart'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import ethers from 'ethers'

// const sdk = new ThirdwebSDK(
//   new ethers.Wallet(
//     process.env.NEXT_PUBLIC_METAMASK_KEY,
//     ethers.getDefaultProvider(
//       'https://rinkeby.infura.io/v3/'
//     )
//   )
// )

const Portfolio = () => {
    const [sanityTokens, setSanityTokens] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
        try {

          const coins = await fetch("https://50gm8him.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D")

          const tempSanityTokens = await coins.json()
          console.log(tempSanityTokens)

          setSanityTokens(tempSanityTokens.result)
        } catch (error) {
          console.log(error)
        }
      }      
      getCoins()
    }, [])

  return (
      <Wrapper>
          <Content>
          <Chart>
              <div>
                <Balance>
                  <BalanceTitle>Saldo da carteira</BalanceTitle>
                  <BalanceValue>
                    {'$'}
                    10,000
                  </BalanceValue>
                </Balance>
              </div>
           <BalanceChart />
          </Chart>
        <PortfolioTable>
            <TableItem>
            <Title>Os teus Ativos</Title>
            </TableItem>
            <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Nome</div>
                <div style={{ flex: 2 }}>Saldo</div>
                <div style={{ flex: 1 }}>Preço</div>
                <div style={{ flex: 1 }}>Alocação</div>
                <div style={{ flex: 0 }}>
                    <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map(coin => (
                <div>
                    <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
        </Content>
     </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.div`
  width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`