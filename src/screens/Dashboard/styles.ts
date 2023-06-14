import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { FlatList } from "react-native";
import { DataListProps } from ".";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 18px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;

`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${RFValue(16)}px;
`;

export const TransactionsList = styled(
    FlatList as new () => FlatList<DataListProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() }
})``;

export const LogoutButton = styled(BorderlessButton)`
  /* padding: 5px; */
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;