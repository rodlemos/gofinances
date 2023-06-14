import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { HighlightCard } from '../../components/HighlightCard';
import { NoData } from '../../components/NoData';
import { ITransactionsCardData, TransactionCard } from '../../components/TransactionCard';
import { useAuth } from '../../hooks/auth';
import { Container, Header, HighlightCards, Icon, LoadContainer, LogoutButton, Photo, Title, Transactions, TransactionsList, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles';

export interface DataListProps extends ITransactionsCardData {
  id: string;
}

interface HighlightProps {
  amount: string;
  lastTransaction: string;
}

interface IHighlightData {
  entries: HighlightProps;
  expenses: HighlightProps;
  total: HighlightProps;
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactionsData, setTransactionsData] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] =
    useState<IHighlightData>({} as IHighlightData);

  const theme = useTheme();
  const { signOut, user } = useAuth();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: 'positive' | 'negative'
  ) {
    const collectionFiltered = collection
      .filter(transaction => transaction.type === type);

    if (collectionFiltered.length === 0) {
      return 0;
    }

    const lastTransaction = new Date(
      Math.max.apply(Math, collectionFiltered
        .map(transaction => new Date(transaction.date).getTime())))

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long' })}`;
  }

  async function loadTransactionData() {
    const dataKey = `@gofinances:transactions_user:${user.id}`;
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensesTotal = 0;

    const transactionFormatted: DataListProps[] = transactions
      .map((item: DataListProps) => {

        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensesTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        });

        const date = Intl.DateTimeFormat("pt-Br", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        }).format(new Date(item.date));

        return {
          id: item.id,
          type: item.type,
          name: item.name,
          amount,
          category: item.category,
          date
        }

      });

    setTransactionsData(transactionFormatted);

    const lastTransactionEntries = getLastTransactionDate(transactions, 'positive');
    const lastTransactionExpenses = getLastTransactionDate(transactions, 'negative');
    
    const totalInterval = (lastTransactionExpenses === 0
      ? ""
      : `01 a ${lastTransactionExpenses}`) || 
      (lastTransactionEntries === 0
        ? ""
        : 
        `01 a ${lastTransactionEntries}`)

    const total = entriesTotal - expensesTotal;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        }),
        lastTransaction: lastTransactionEntries
          ? `Última entrada dia ${lastTransactionEntries}`
          : "Nenhuma Entrada"
      },
      expenses: {
        amount: expensesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        }),
        lastTransaction: lastTransactionExpenses
          ? `Última saída dia ${lastTransactionExpenses}`
          : "Nenhuma saída"
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        }),
        lastTransaction: totalInterval
      }
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactionData();
  }, [])

  useFocusEffect(useCallback(() => {
    loadTransactionData();
  }, []));

  return (
    <Container>
      {isLoading ?
        <LoadContainer>
          <ActivityIndicator color={theme.colors.secundary} size={60} />
        </LoadContainer>
        : <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={{ uri: user.photo }} />
                <User>
                  <UserGreeting>Olá, </UserGreeting>
                  <UserName>{user.name}</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={signOut}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>

          <HighlightCards>
            <HighlightCard
              type="up"
              title="Entradas"
              amount={highlightData.entries.amount}
              lastTransaction={highlightData.entries.lastTransaction}
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData.expenses.amount}
              lastTransaction={highlightData.expenses.lastTransaction}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
            />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>

            <TransactionsList
              data={transactionsData}
              renderItem={({ item }) => <TransactionCard data={item} />}
              keyExtractor={item => item.id}
              ListEmptyComponent={<NoData/>}
            />

          </Transactions>
        </>
      }
    </Container>
  )
}
