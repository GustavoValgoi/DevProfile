import React from 'react'
import {
  Container,
  Content,
  GoBackButton,
  Header,
  HeaderTitle,
  Icon,
  Title,
  UserAvatar,
} from './styles'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native'
import { Button } from '../../components/Form/Button'
import { useNavigation } from '@react-navigation/native'
import { useForm, FieldValues, Resolver } from 'react-hook-form'
import { InputControl } from '../../components/Form/InputControl'
import { yupResolver } from '@hookform/resolvers/yup'
import avatarDefault from '../../assets/avatar02.png'
import * as yup from 'yup'
import { api } from '../../services/api'
import { useAuth } from '../../context/AuthContext'

interface ScreenNavigationProp {
  navigate: (screen: string) => void
  goBack: () => void
}

interface IFormInputs {
  [name: string]: unknown
}

const formSchema = yup.object({
  name: yup.string().required('Informe seu nome completo.'),
  email: yup.string().email('E-mail inválido.').required('Informe o e-mail.'),
})

export const UserProfileEdit: React.FunctionComponent = () => {
  const { user } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<Resolver>(formSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  })
  const { navigate, goBack } = useNavigation<ScreenNavigationProp>()

  const handleProfileEdit = async (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
    }

    try {
      await api.put('/profile', data)
      Alert.alert(
        'Perfil atualizado',
        'Os dados foram atualizados com sucesso.',
      )
      goBack()
    } catch {
      Alert.alert(
        'Erro no atualizar',
        'Ocorreu um erro ao realizar a atualização, tente novamente.',
      )
    }
  }

  console.log(process.env.EXPO_PUBLIC_API_URL)
  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Header>
            <GoBackButton onPress={goBack}>
              <Icon name="chevron-left" />
            </GoBackButton>
            <HeaderTitle>Usuários</HeaderTitle>
            <UserAvatar
              source={
                user.avatar_url ? { uri: user.avatar_url } : avatarDefault
              }
            />
          </Header>
          <Content>
            <View>
              <Title>Editar dados do perfil</Title>
            </View>
            <InputControl
              error={errors.name && (errors.name.message as string)}
              control={control}
              name="name"
              placeholder="Nome completo"
            />
            <InputControl
              error={errors.email && (errors.email.message as string)}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              control={control}
              name="email"
              placeholder="E-mail"
            />

            <Button
              title="Atualizar perfil"
              onPress={handleSubmit(handleProfileEdit)}
              disabled={!!errors.name || !!errors.email}
            />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
