import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { DefaultTheme } from 'styled-components/native'

const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(100)}px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 8px 0;
`
const UserDetail = styled.View``

const UserNameDetail = styled.View`
  margin-bottom: 16px;
`
const UserEmailDetail = styled.View``
const NameTitle = styled.Text`
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  color: ${({ theme }: DefaultTheme) => theme.colors.light};
  font-size: ${RFValue(8)}px;
  text-transform: uppercase;
`
const NameData = styled.Text`
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
`
const EmailTitle = styled.Text`
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  color: ${({ theme }: DefaultTheme) => theme.colors.light};
  font-size: ${RFValue(8)}px;
  text-transform: uppercase;
`
const EmailData = styled.Text`
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
`
const UserAvatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`

export {
  Container,
  UserDetail,
  UserNameDetail,
  UserEmailDetail,
  NameTitle,
  NameData,
  EmailTitle,
  EmailData,
  UserAvatar,
}
