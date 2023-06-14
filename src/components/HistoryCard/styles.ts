import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({theme})=> theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(13)}px ${RFValue(24)}px;
  border-radius: 5px;
  border-left-width: 4px;
  border-left-color: ${({color})=> color};
  margin-bottom: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({theme})=> theme.colors.titles};
`;

export const Amount = styled.Text`
  font-family: ${({theme})=> theme.fonts.bold};
  font-size: ${RFValue(15)}px;
`;
