import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './src/global/styles/theme'

import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { AuthProvider } from './src/context/AuthContext'

const App: React.FunctionComponent = () => {
  SplashScreen.preventAutoHideAsync()

  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  SplashScreen.hideAsync()

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
