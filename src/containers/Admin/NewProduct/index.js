import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../Components'
import apiCodeIce from '../../../services/api'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()
  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do Produto'),
    price: Yup.string().required('Digite o preço do Produto'),
    category: Yup.object().shape({
      name: Yup.string().required('Escolha uma categoria para o produto')
    }),
    file: Yup.mixed()
      .test('required', 'carregue o arquivo', value => {
        return value?.length > 0
      })
      .test('fileSize', 'Carregue arquivos de até 2MB', value => {
        return value[0]?.size <= 200000
      })
  })
  const {
    register,
    control,
    handleSubmit,

    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])
    await toast.promise(apiCodeIce.post('products', productDataFormData), {
      pending: 'Criando novo produto...',
      success: 'Produto criado com sucesso!',
      error: 'Erro ao criar o produto'
    })

    setTimeout(() => {
      push('/listar-produtos')
    })
    await apiCodeIce.post('products', productDataFormData)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeIce.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do Produto
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>
        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  placeholder="Escolha a categoria"
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct
