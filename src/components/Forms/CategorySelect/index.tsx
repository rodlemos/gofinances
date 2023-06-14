import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Category, Icon } from "./styles";

interface Props extends RectButtonProps {
  title: string;
}

export function CategorySelect({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
