import styled from 'styled-components'

import Button from '../../../Components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 40px;
  background: #fff;
  border: none;
  width: 100%;
  border-radius: 8px;
  min-width: 280px;
  padding-left: 15px;
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  gap: 8px;

  input {
    opacity: 0;
    width: 1px;
  }
`
