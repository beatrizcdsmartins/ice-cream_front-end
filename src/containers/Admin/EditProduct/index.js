import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../Components'
import { ProductName } from '../../../Components/CardProduct/styles'
import apiCodeIce from '../../../services/api'
import {
  Container,
  Label,
  Input,
  ButtonStyles,
  LabelUpload,
  ContainerInput
} from './styles'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const {
    push,
    location: {
      state: { product }
    }
  } = useHistory()
  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do Produto'),
    price: Yup.string().required('Digite o preço do Produto'),
    category: Yup.object().shape({
      name: Yup.string().required('Escolha uma categoria para o produto'),
      offer: Yup.bool()
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
    productDataFormData.append('offer', data.offer)
    await toast.promise(
      apiCodeIce.put(`products/${product.id}`, productDataFormData),
      {
        pending: 'Editando novo produto...',
        success: 'Produto editado com sucesso!',
        error: 'Erro ao editar o produto'
      }
    )

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
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register('price')}
            defaultValue={product.price}
          />
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
            defaultValue={product.category}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  placeholder="Escolha a categoria"
                  defaultValue={product.category}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ContainerInput>
          <input
            type="checkbox"
            {...register('offer')}
            defaultChecked={product.offer}
          />

          <Label>Produto em oferta?</Label>
        </ContainerInput>

        <ButtonStyles>Editar Produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditProduct
