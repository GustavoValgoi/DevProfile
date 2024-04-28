import styled, { DefaultTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.dark};
`
const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(28)}px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.secondary};
`
const HeaderTop = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(48)}px ${RFValue(24)}px ${RFValue(8)}px;
`

const GoBackButton = styled.TouchableOpacity`
  margin-right: ${RFValue(16)}px;
`
const Icon = styled(Feather)`
  color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
  font-size: ${RFValue(24)}px;
`
const HeaderTitle = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.bold};
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`
const PhotoContainer = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 10px;
  margin: ${RFValue(48)}px auto;
`

const UserAvatar = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 10px;
  margin-left: auto;
`
const PhotoButton = styled.TouchableOpacity`
  background-color: ${({ theme }: DefaultTheme) => theme.colors.danger};
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${RFValue(-16)}px;
  right: ${RFValue(-16)}px;
`

const Content = styled.View`
  flex: 1;
  margin-top: ${RFValue(64)}px;
  padding: ${RFValue(48)}px ${RFValue(24)}px;
`

const UserNameDetail = styled.View`
  background-color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  border-radius: 10px;
  margin-bottom: 16px;
`
const NameTitle = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.colors.light};
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`
const NameData = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`
const UserEmailDetail = styled.View`
  background-color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  border-radius: 10px;
`
const EmailTitle = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.colors.light};
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`
const EmailData = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`

export {
  Container,
  Content,
  EmailData,
  EmailTitle,
  GoBackButton,
  Header,
  HeaderTop,
  HeaderTitle,
  Icon,
  NameData,
  NameTitle,
  UserAvatar,
  UserEmailDetail,
  UserNameDetail,
  PhotoContainer,
  PhotoButton,
}
