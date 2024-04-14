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
} from './styles'

import avatarDefault from '../../assets/avatar02.png'

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={avatarDefault} />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreating>Olá,</UserGreating>
              <UserName>Gustavo</UserName>
            </UserInfoDetail>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  )
}
