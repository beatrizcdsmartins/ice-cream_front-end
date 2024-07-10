import styled from 'styled-components'

import RegisterImg from './../../assets/berry-vanilla-and-chocolate-ice-cream-sundae-2023-11-27-05-17-03-utc copiar 2.png'
import BackgroundImage from './../../assets/ICE CREAM-min.jpg'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: url('${BackgroundImage}');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`

export const RegisterImage = styled.div`
  height: 70%;
  width: 500px;
  background: url('${RegisterImg}');
  background-color: #ff3158;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: #ffb900;
  height: 70%;
  padding: 0 60px;
  border-radius: 0 10px 10px 0;

  h1 {
    color: #fff7f0;
    font-weight: 800;
    margin: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const Label = styled.label`
  color: #e20056;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 3px;
  margin-top: 15px;
`

export const Input = styled.input`
  border: ${props => (props.error ? '2px solid red' : 'none')};
  border-radius: 5px;
  width: 90%;
  height: 30px;
  padding-left: 10px;
`

export const SignInLink = styled.p`
  color: #fff7f0;

  a {
    color: #e20056;
    cursor: pointer;
    font-weight: 500;
  }
`
