import React from 'react'
import { categories } from '../../utils/categories';
import { Amount, Category, CategoryName, Container, Date, Footer, Icon, Title } from './styles'

export interface ITransactionsCardData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: ITransactionsCardData
}

export function TransactionCard({data}: Props) {
  const {type, name, amount, date} = data;
  const [ category ] = categories.filter(
    item => item.key === data.category
  );
  return (
    <Container>
      <Title>{name}</Title>

      <Amount type={type}>{type === "negative" && "- "}{amount}</Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}
