import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { DefaultTheme } from 'styled-components/native'

const Container = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  border-radius: 5px;
  padding: 18px;
  margin-top: ${RFValue(16)}px;
`

const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.bold};
  color: ${({ theme }: DefaultTheme) => theme.colors.dark};
`

export { Container, Title }
