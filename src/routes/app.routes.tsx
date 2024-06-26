import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home'
import { UserDetails } from '../pages/UserDetails'
import { UserProfile } from '../pages/UserProfile'
import { UserProfileEdit } from '../pages/UserProfileEdit'

const App = createNativeStackNavigator()

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <App.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name="SignIn" component={Home} />
      <App.Screen name="UserDetails" component={UserDetails} />
      <App.Screen name="UserProfile" component={UserProfile} />
      <App.Screen name="UserProfileEdit" component={UserProfileEdit} />
    </App.Navigator>
  )
}
