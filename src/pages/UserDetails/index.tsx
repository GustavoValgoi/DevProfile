import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { IUser } from '../../model/IUser'
import { api } from '../../services/api'
import {
  Container,
  Content,
  ContentTitle,
  EmailData,
  EmailTitle,
  GoBackButton,
  Header,
  HeaderTitle,
  Icon,
  NameData,
  NameTitle,
  UserAvatar,
  UserDetailAvatar,
  UserEmailDetail,
  UserNameDetail,
} from './styles'
import avatarDefault from '../../assets/avatar02.png'
import { useAuth } from '../../context/AuthContext'

interface RouteParams {
  userId: string
}

export const UserDetails: React.FunctionComponent = () => {
  const route = useRoute()
  const [userDetails, setUserDetails] = React.useState<IUser>({} as IUser)
  const { userId } = route.params as RouteParams
  const { user } = useAuth()
  const { goBack } = useNavigation()

  React.useEffect(() => {
    const loadUser = async () => {
      const response = await api.get(`/users/${userId}`)
      setUserDetails(response.data)
    }
    loadUser()
  }, [userId])

  return (
    <Container>
      <Header>
        <GoBackButton onPress={goBack}>
          <Icon name="chevron-left" />
        </GoBackButton>
        <HeaderTitle>Usuários</HeaderTitle>
        <UserAvatar
          source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
        />
      </Header>
      <Content>
        <ContentTitle>Detalhes do Usuário</ContentTitle>
        <UserDetailAvatar
          source={
            userDetails.avatar_url
              ? { uri: userDetails.avatar_url }
              : avatarDefault
          }
        />
        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{userDetails.name}</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{userDetails.email}</EmailData>
        </UserEmailDetail>
      </Content>
    </Container>
  )
}
