import React from 'react'
import { api } from '../services/api'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IUser } from '../model/IUser'

export interface ICredentials {
  email: string
  password: string
}

interface IAuthState {
  token: string
  user: IUser
}
interface IAuthContext {
  user: IUser
  signIn: (credentials: ICredentials) => void
  signOut: () => void
}

interface IProps {
  children: React.ReactElement
}
export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

const tokenData = process.env.EXPO_PUBLIC_TOKEN_DATA as string
const userData = process.env.EXPO_PUBLIC_USER_DATA as string

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [data, setData] = React.useState<IAuthState>({} as IAuthState)

  React.useEffect(() => {
    async function loadAuthData() {
      const token = await AsyncStorage.getItem(tokenData)
      const user = await AsyncStorage.getItem(userData)

      if (token && user) {
        setData({ token, user: JSON.parse(user) })
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
    }
    loadAuthData()
  }, [])

  const signIn = async (credentials: ICredentials) => {
    try {
      const response = await api.post('/sessions', credentials)

      const { token, user } = response.data

      await AsyncStorage.setItem(tokenData, token)
      await AsyncStorage.setItem(userData, JSON.stringify(user))

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ token, user })
    } catch {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro fazer o login, verifique as credenciais.',
      )
    }
  }

  const signOut = async () => {
    await AsyncStorage.removeItem(tokenData)
    await AsyncStorage.removeItem(userData)

    setData({} as IAuthState)
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): IAuthContext => {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth deve ser usado em um AuthProvider')
  }

  return context
}
