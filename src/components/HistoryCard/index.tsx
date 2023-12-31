import React from 'react';
import { Container, Amount, Title } from './styles';

interface Props {
  title: string;
  amount: string;
  color: string;
}

export default function HistoryCard({ title, amount, color }: Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  )
}
