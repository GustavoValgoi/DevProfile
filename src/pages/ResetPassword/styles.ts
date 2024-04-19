import { RFValue } from 'react-native-responsive-fontsize'
import styled, { DefaultTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.dark};
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
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  color: ${({ theme }: DefaultTheme) => theme.colors.primary};
`
export {
  Container,
  Content,
  Title,
  Logo,
  BackToSignIn,
  BackToSignInTitle,
  Icon,
}
