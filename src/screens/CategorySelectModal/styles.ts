import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons" 
import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler"

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({theme})=> theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom:  19px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.regular};
  font-size:  ${RFValue(18)}px;
  color: ${({theme})=> theme.colors.shape};
`;

export const Category = styled(RectButton)<CategoryProps>`
  width: 100%;
  flex-direction: row;
  padding: ${RFValue(15)}px;
  align-items: center;
  background-color:${({isActive, theme})=> isActive 
  ? theme.colors.secundary_light
  : theme.colors.background
};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Name = styled.Text`
  font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme})=> theme.colors.titles};

`;

export const Separator = styled.View`
  height: 1.5px;
  width: 100%;
  background-color: ${({theme})=> theme.colors.text_light};
`;

export const Footer = styled.View`
 padding: ${RFValue(26)}px;
`;

