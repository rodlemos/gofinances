import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48.5%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${({theme})=> theme.colors.text_light};
  border-radius: 5px;
  padding: ${RFValue(16)}px ${RFValue(35)}px;

  ${({isActive, type})=> isActive && type === "up" && css`
    background-color: ${({theme})=> theme.colors.success_light};
    border: none;
  `}

  ${({isActive, type})=> isActive && type === "down" && css`
    background-color: ${({theme})=> theme.colors.error_light};
    border: none;
  `}
`;

export const Icon = styled(Feather)<IconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(12)}px;
  color: ${({theme, type})=> type === "up"
  ? theme.colors.success
  : theme.colors.error}
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=> theme.fonts.regular};
  color: ${({theme})=> theme.colors.titles};
`;