import React from 'react'
import {
  Container,
  Content,
  Logo,
  Title,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  Icon,
  CreateAccount,
  CreateAccountTitle,
} from './styles'
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Alert,
} from 'react-native'
import { Button } from '../../components/Form/Button'
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import { useForm, FieldValues, Resolver } from 'react-hook-form'
import { InputControl } from '../../components/Form/InputControl'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth, ICredentials } from '../../context/AuthContext'

interface ScreenNavigationProp {
  navigate: (screen: string) => void
}

interface IFormInputs {
  [name: string]: unknown
}

const formSchema = yup.object({
  email: yup.string().email('E-mail inválido.').required('Informe o e-mail.'),
  password: yup.string().required('Informe a senha.'),
})

export const SignIn: React.FunctionComponent = () => {
  const [loading, setLoading] = React.useState(false)
  const auth = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<Resolver>(formSchema),
  })
  const { navigate } = useNavigation<ScreenNavigationProp>()

  const handleSignIn = (form: IFormInputs) => {
    const data = {
      email: form.email,
      password: form.password,
    } as ICredentials

    setLoading(true)
    try {
      auth.signIn(data)
      setLoading(false)
    } catch {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro fazer o login, verifique as credenciais.',
      )
      setLoading(false)
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
              <Title>Faça seu login</Title>
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
            <InputControl
              error={errors.password && (errors.password.message as string)}
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              name="password"
              placeholder="Senha"
              secureTextEntry
            />
            <Button
              title="Entrar"
              onPress={handleSubmit(handleSignIn)}
              disabled={loading || !!errors.email || !!errors.password}
            />
            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount onPress={() => navigate('SignUp')}>
        <Icon name="log-in" />
        <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
      </CreateAccount>
    </KeyboardAvoidingView>
  )
}
