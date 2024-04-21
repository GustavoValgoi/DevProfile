import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Container,
  Content,
  PhotoContainer,
  EmailData,
  EmailTitle,
  GoBackButton,
  Header,
  HeaderTitle,
  Icon,
  NameData,
  NameTitle,
  PhotoButton,
  UserEmailDetail,
  UserNameDetail,
  UserAvatar,
} from './styles'
import avatarDefault from '../../assets/avatar02.png'
import { useAuth } from '../../context/AuthContext'

interface RouteParams {
  userId: string
}

export const UserProfile: React.FunctionComponent = () => {
  const { user } = useAuth()
  const { goBack } = useNavigation()

  return (
    <Container>
      <Header>
        <GoBackButton onPress={goBack}>
          <Icon name="chevron-left" />
        </GoBackButton>
        <HeaderTitle>Seu perfil</HeaderTitle>
      </Header>
      <PhotoContainer>
        <UserAvatar
          source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
        />
        <PhotoButton>
          <Icon name="camera" />
        </PhotoButton>
      </PhotoContainer>
      <Content>
        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{user.name}</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{user.email}</EmailData>
        </UserEmailDetail>
      </Content>
    </Container>
  )
}
