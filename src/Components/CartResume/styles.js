import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerItems = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-width: 400px;
  .containerItens,
  .containerTaxa,
  .containerTot {
    display: flex;
    justify-content: space-between;
  }

  .containerTot {
    margin-top: 60px;
  }
  h3 {
    color: #00000099;
    margin-bottom: 15px;
  }
  .containerItens p,
  .containerTaxa p {
    color: #00000095;
    font-weight: 500;
  }

  .containerTot {
    background-color: #fff7f0;
    font-weight: 900;
    padding: 20px;
    border-radius: 10px;
  }
`
