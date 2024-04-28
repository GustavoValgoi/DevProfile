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
  HeaderTop,
} from './styles'
import avatarDefault from '../../assets/avatar02.png'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../../components/Form/Button'

interface RouteParams {
  userId: string
}

interface ScreenNavigationProps {
  goBack: () => void
  navigate: (route: string) => void
}

export const UserProfile: React.FunctionComponent = () => {
  const { user } = useAuth()
  const { goBack, navigate } = useNavigation<ScreenNavigationProps>()

  const handleUserProfileEdit = () => {
    navigate('UserProfileEdit')
  }

  return (
    <Container>
      <Header>
        <HeaderTop>
          <GoBackButton onPress={goBack}>
            <Icon name="chevron-left" />
          </GoBackButton>
          <HeaderTitle>Seu perfil</HeaderTitle>
        </HeaderTop>
        <PhotoContainer>
          <UserAvatar
            source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
          />
          <PhotoButton>
            <Icon name="camera" />
          </PhotoButton>
        </PhotoContainer>
      </Header>

      <Content>
        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{user.name}</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{user.email}</EmailData>
        </UserEmailDetail>

        <Button
          title="Editar dados do perfil"
          onPress={handleUserProfileEdit}
        />
        <Button title="Trocar senha" onPress={() => {}} />
      </Content>
    </Container>
  )
}
