import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${({theme})=> theme.fonts.regular};
  color: ${({theme})=> theme.colors.text};
  font-size: ${RFValue(16)}px;
`;