import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom/'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Button from '../../Components/Button'
import api from '../../services/api'
import Logo from './../../assets/logo_ice.svg'
import { ErrorMessage } from './../../Components'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string('Você tem que ter um nome, rs.😅').required(
      'Você tem que ter um nome, rs.😅'
    ),
    email: Yup.string()
      .email('Eita, digite um e-mail válido!👀')
      .required('Esse campo é obrigatório!🫥'),
    password: Yup.string('Vish, senha inválida!😣')
      .required('Esse campo é obrigatório!🫥')
      .min(6, 'Ei, no mínimo 6 caracteres.🔏'),
    confirmPassword: Yup.string()
      .required('Esse campo é obrigatório!🫥')
      .oneOf(
        [Yup.ref('password')],
        'Vish, parece que as senhas não estão iguais.😣'
      )
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastrado com sucesso!✅', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else if (status === 409) {
        toast.error('E-mail já cadastrado, faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema😵‍💫, tente novamente!')
    }
  }
  return (
    <Container>
      <RegisterImage></RegisterImage>
      <ContainerItens>
        <img src={Logo} alt="logo" width={260} />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
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
          <Label>Confirme a senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          <Button type="submit">Acessar</Button>
        </form>
        <SignInLink>
          Já possui conta? <Link to="/login">Acesse aqui!</Link>{' '}
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Register
