import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: #ff707c;
`

export const CartImg = styled.img`
  width: 100%;
  max-height: 600px;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 30px;
  padding-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 10px;
  }
`
