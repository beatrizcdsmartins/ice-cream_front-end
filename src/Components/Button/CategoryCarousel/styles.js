import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff7f0;

  .rec.rec-arrow {
    border-radius: 0;
    background-color: #e20056;
    color: #fff7f0;
  }

  .rec.rec-arrow:hover {
    border-radius: 50%;
  }

  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }

  .sc-gKPSgB {
    display: none;
  }
`

export const H1 = styled.h1`
  margin: 25px 0;
  font-size: 40px;
  color: #e2005622;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #e20056;
  text-transform: uppercase;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 250px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #e20056;
  border: none;
  border-radius: 8px;
  height: 50px;
  color: #fff7f0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
