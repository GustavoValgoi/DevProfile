import React from 'react'
import { useNavigation } from '@react-navigation/native'
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
  UserList,
  UserListHeader,
  UserListEmpty,
} from './styles'

import avatarDefault from '../../assets/avatar02.png'
import { useAuth } from '../../context/AuthContext'
import { Alert } from 'react-native'
import { IUser } from '../../model/IUser'
import { api } from '../../services/api'
import { User } from '../../components/User'

interface ScreenNavigation {
  navigate: (screen: string, params?: unknown) => void
}

export const Home: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState<IUser[]>([])
  const { user, signOut } = useAuth()
  const { navigate } = useNavigation<ScreenNavigation>()

  React.useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('users')
      setUsers(response.data)
    }

    loadUsers()
  }, [])

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

  const handleUserDetails = (userId: string) => {
    navigate('UserDetails', { userId })
  }

  const handleUserProfile = () => {
    navigate('UserProfile')
  }

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={handleUserProfile}>
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
      <UserList
        data={users}
        keyExtractor={(item: IUser) => item.id}
        renderItem={({ item }: { item: IUser }) => (
          <User data={item} onPress={() => handleUserDetails(item.id)} />
        )}
        ListHeaderComponent={<UserListHeader>Usuários</UserListHeader>}
        ListEmptyComponent={
          <UserListEmpty>Opss.. nada encontrado</UserListEmpty>
        }
      />
    </Container>
  )
}
