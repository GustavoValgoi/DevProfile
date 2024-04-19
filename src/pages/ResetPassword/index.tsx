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
  token: yup.string().uuid('Código inválido').required('Informe o código.'),
  password: yup.string().required('Informe a nova senha.'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Confimação incorreta.'),
})

export const ResetPassword: React.FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<Resolver>(formSchema),
  })
  const { navigate } = useNavigation<ScreenNavigationProp>()

  const handleResetPassword = async (form: IFormInputs) => {
    const data = {
      token: form.token,
      password: form.password,
      password_confirmation: form.password_confirmation,
    }

    try {
      await api.post('/password/reset', data)
      Alert.alert('Senha redefinida', 'A senha foi alterada com sucesso.')
      navigate('SignIn')
    } catch {
      Alert.alert(
        'Ocorreu um problema',
        'Ocorreu um erro ao tentar redefinir sua senha, tente novamente.',
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
              <Title>Alterar a senha</Title>
            </View>
            <InputControl
              error={errors.token && (errors.token.message as string)}
              control={control}
              name="token"
              placeholder="código"
              autoCorrect={false}
              autoCapitalize="none"
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

            <InputControl
              error={
                errors.password_confirmation &&
                (errors.password_confirmation.message as string)
              }
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password_confirmation"
              placeholder="Confirmação da Senha"
              secureTextEntry
            />
            <Button
              title="confirmar"
              onPress={handleSubmit(handleResetPassword)}
            />
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
