import React from 'react'

interface IAuthContext {
  name: string
  signIn: () => void
}

interface IProps {
  children: React.ReactElement
}
export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const signIn = () => {
    console.log('Sign in...')
  }

  return (
    <AuthContext.Provider value={{ name: 'Gustavo', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
