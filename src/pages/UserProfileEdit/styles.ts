import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled, { DefaultTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.dark};
`

const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(48)}px ${RFValue(24)}px ${RFValue(8)}px;
`
const GoBackButton = styled.TouchableOpacity`
  margin-right: ${RFValue(16)}px;
`

const HeaderTop = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(48)}px ${RFValue(24)}px ${RFValue(8)}px;
`
const HeaderTitle = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.bold};
  font-weight: bold;
  font-size: ${RFValue(18)}px;
`
const UserAvatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
  margin-left: auto;
`
const PhotoContainer = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 10px;
  margin: ${RFValue(48)}px auto;
`
const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
`

const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  color: ${({ theme }: DefaultTheme) => theme.colors.light};
  margin-bottom: 24px;
`

const Logo = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  margin-bottom: ${RFValue(64)}px;
`

const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
  border-top-width: 1px;
  border-color: ${({ theme }: DefaultTheme) => theme.colors.black};
  padding: 16px 0 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const BackToSignInTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  margin-left: 16px;
`

const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
`
export {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  GoBackButton,
  PhotoContainer,
  UserAvatar,
  Content,
  Title,
  Logo,
  BackToSignIn,
  BackToSignInTitle,
  Icon,
}
