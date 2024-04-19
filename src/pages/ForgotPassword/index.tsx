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
  email: yup.string().email('E-mail inválido.').required('Informe o e-mail.'),
})

export const ForgotPassword: React.FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<Resolver>(formSchema),
  })
  const { navigate } = useNavigation<ScreenNavigationProp>()

  const handleForgotPassword = async (form: IFormInputs) => {
    const data = {
      email: form.email,
    }

    try {
      await api.post('/password/forgot', data)
      Alert.alert(
        'E-mail enviado',
        'Você receberá um e-mail com as instruções para redefinir sua senha',
      )
      navigate('ResetPassword')
    } catch {
      Alert.alert(
        'Erro no envio',
        'Ocorreu um erro ao enviar o e-mail, tente novamente.',
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
              <Title>Digite sua senha</Title>
            </View>

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
              title="Enviar e-mail"
              onPress={handleSubmit(handleForgotPassword)}
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
