import React from 'react'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserAvatarButton,
  UserInfoDetail,
  UserGreating,
  UserName,
  UserAvatar,
  Icon,
  LogoutButton,
} from './styles'

import avatarDefault from '../../assets/avatar02.png'
import { useAuth } from '../../context/AuthContext'
import { Alert } from 'react-native'

export const Home: React.FunctionComponent = () => {
  const { user, signOut } = useAuth()

  const handleLogout = () => {
    Alert.alert('Tem certeza?', 'Deseja realmente fazer seu logout ?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => signOut(),
      },
    ])
  }

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreating>Olá,</UserGreating>
              <UserName>{user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>
          <LogoutButton onPress={handleLogout}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  )
}
