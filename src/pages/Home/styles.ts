import styled, { DefaultTheme } from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.dark};
`
const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: ${RFValue(28)}px;
`

const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
const UserAvatarButton = styled.TouchableOpacity``

const UserAvatar = styled.Image`
  border-radius: 50px;
  height: ${RFValue(52)}px;
  width: ${RFValue(52)}px;
`
const UserInfoDetail = styled.View`
  margin-left: 17px;
`
const UserGreating = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
`
const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.bold};
`
const Icon = styled(Feather)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }: DefaultTheme) => theme.colors.dark};
`

const LogoutButton = styled.TouchableOpacity``

export {
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
}
