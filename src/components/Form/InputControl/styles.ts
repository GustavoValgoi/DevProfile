import { RFValue } from 'react-native-responsive-fontsize'
import styled, { DefaultTheme } from 'styled-components/native'

const Container = styled.View`
  width: 100%;
`

const Error = styled.Text`
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }: DefaultTheme) => theme.colors.danger};
  margin-bottom: 16px;
`

export { Container, Error }
