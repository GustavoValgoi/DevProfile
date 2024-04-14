import React from 'react'
import {
  BackToSignIn,
  BackToSignInTitle,
  Container,
  Content,
  Icon,
  Logo,
  Title,
} from './styles'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native'
import { Button } from '../../components/Form/Button'
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import { useForm, FieldValues, Resolver } from 'react-hook-form'
import { InputControl } from '../../components/Form/InputControl'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/api'

interface ScreenNavigationProp {
  navigate: (screen: string) => void
}

interface IFormInputs {
  [name: string]: unknown
}

const formSchema = yup.object({
  name: yup.string().required('Informe seu nome completo.'),
  email: yup.string().email('E-mail inválido.').required('Informe o e-mail.'),
  password: yup.string().required('Informe a senha.'),
})

export const SignUp: React.FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<Resolver>(formSchema),
  })
  const { navigate } = useNavigation<ScreenNavigationProp>()

  const handleSignUp = async (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    }

    try {
      await api.post('/users', data)
      Alert.alert('Cadastro realizado', 'Você ja pode fazer seu login.')
    } catch {
      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro ao realizar o cadastro, tente novamente.',
      )
    }
  }
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
          <Content>
            <Logo source={logo} />
            <View>
              <Title>Crie sua conta</Title>
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
            <InputControl
              error={errors.password && (errors.password.message as string)}
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password"
              placeholder="Senha"
              secureTextEntry
            />
            <Button title="Criar conta" onPress={handleSubmit(handleSignUp)} />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn onPress={() => navigate('SignIn')}>
        <Icon name="arrow-left" />
        <BackToSignInTitle>Fazer login</BackToSignInTitle>
      </BackToSignIn>
    </KeyboardAvoidingView>
  )
}
