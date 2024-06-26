import React from 'react'
import avatarDefault from '../../assets/avatar02.png'
import {
  Container,
  EmailData,
  EmailTitle,
  NameData,
  NameTitle,
  UserAvatar,
  UserDetail,
  UserEmailDetail,
  UserNameDetail,
} from './styles'
import { IUser } from '../../model/IUser'

interface UserProps {
  data: IUser
  onPress: () => void
}

export const User: React.FunctionComponent<UserProps> = ({
  data,
  onPress,
}: UserProps) => {
  return (
    <Container onPress={onPress}>
      <UserDetail>
        <UserNameDetail>
          <NameTitle>Name</NameTitle>
          <NameData>{data.name}</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>Name</EmailTitle>
          <EmailData>{data.email}</EmailData>
        </UserEmailDetail>
      </UserDetail>
      <UserAvatar
        source={data.avatar_url ? { uri: data.avatar_url } : avatarDefault}
      />
    </Container>
  )
}
