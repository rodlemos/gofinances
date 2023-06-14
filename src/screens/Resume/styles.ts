import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({theme})=> theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.regular};
  font-size:  ${RFValue(18)}px;
  color: ${({theme})=> theme.colors.shape};
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
`;

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: ${RFValue(32)}px 0;
`;

export const MonthSelect = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(41)}px;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const MonthSelectIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color:  ${({theme}) => theme.colors.titles_dark};
  padding: 10px;
`;

export const Month = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color:  ${({theme}) => theme.colors.titles_dark}
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;