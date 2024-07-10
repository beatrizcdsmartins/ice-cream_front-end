import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../Components'
import Button from '../../Components/Button'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import Logo from './../../assets/logo_ice.png'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Eita, digite um e-mail válido!👀')
      .required('Esse campo é obrigatório!🫥'),
    password: Yup.string('Vish, senha inválida!😣')
      .required('Esse campo é obrigatório!🫥')
      .min(6, 'Ei, no mínimo 6 caracteres.🔏')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando os dados...👀',
        success: 'Dados validados com sucesso! Seja bem-vindo(a)!😊',
        error: 'Vixe, deu ruim! Verifique seu e-mail e senha.🤯 '
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000)
  }
  return (
    <Container>
      <LoginImage></LoginImage>
      <ContainerItens>
        <img src={Logo} alt="logo" width={300} />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label className="passwordLabel">Senha</Label>
          <Input
            error={errors.password?.message}
            type="password"
            {...register('password')}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit">Acessar</Button>
        </form>
        <SignInLink>
          Não possui conta? <Link to="/cadastro">Crie uma!</Link>{' '}
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
