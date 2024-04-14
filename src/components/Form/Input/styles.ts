import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { DefaultTheme } from 'styled-components/native'

const Container = styled(TextInput)`
  width: 100%;
  padding: 18px 16px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.gray800};
  color: ${({ theme }: DefaultTheme) => theme.colors.light};
  border-radius: 5px;
  margin-bottom: 16px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
`

export { Container }
