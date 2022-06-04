import React from 'react'

const Main = () => {
  return (
    <div>Main</div>
  )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: scroll;
  & div {
    border-radius: 0.4rem;
  }
  `