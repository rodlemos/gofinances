import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/core';
import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { VictoryPie } from 'victory-native';
import HistoryCard from '../../components/HistoryCard';
import { NoData } from '../../components/NoData';
import { useAuth } from '../../hooks/auth';
import { categories } from '../../utils/categories';
import { ChartContainer, Container, Content, Header, LoadContainer, Month, MonthSelect, MonthSelectButton, MonthSelectIcon, Title } from './styles';

interface ITransactionsData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface ICategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export function Resume() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState<ICategoryData[]>([]);

  const { user } = useAuth();
  const theme = useTheme();

  function handleDateChange(action: "next" | "prev") {
    if (action === "next") {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }

  async function loadData() {
    setIsLoading(true);

    const dataKey = `@gofinances:transactions_user:${user.id}`;
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expenses = responseFormatted.filter((expense: ITransactionsData) =>
      expense.type === "negative"
      && new Date(expense.date).getMonth() === selectedDate.getMonth()
      && new Date(expense.date).getFullYear() === selectedDate.getFullYear()
    );

    const expensesTotal = expenses.reduce((acc: number, expense: ITransactionsData) => {
      return acc + Number(expense.amount)
    }, 0);

    const totalByCategory: ICategoryData[] = [];

    categories.forEach(category => {
      let categorySum = 0;

      expenses.forEach((expense: ITransactionsData) => {
        if (expense.category === category.key) {
          categorySum += Number(expense.amount);
        }
      });

      if (categorySum > 0) {
        const total = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })

        const percent = `${(categorySum / expensesTotal * 100).toFixed(0)}%`

        totalByCategory.push({
          key: category.key,
          name: category.name,
          total: categorySum,
          totalFormatted: total,
          color: category.color,
          percent
        });
      }
    });

    setTotalByCategories(totalByCategory);
    setIsLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadData();
  }, [selectedDate]));

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      {isLoading ?
        <LoadContainer>
          <ActivityIndicator color={theme.colors.secundary} size={60} />
        </LoadContainer>

        : <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: useBottomTabBarHeight() }}
        >

          <MonthSelect>
            <MonthSelectButton>
              <MonthSelectIcon
                name="chevron-left"
                onPress={() => handleDateChange("prev")}
              />
            </MonthSelectButton>

            <Month>{format(selectedDate, "MMMM, yyyy", { locale: ptBR })}</Month>

            <MonthSelectButton>
              <MonthSelectIcon
                name="chevron-right"
                onPress={() => handleDateChange("next")}
              />
            </MonthSelectButton>
          </MonthSelect>

          {totalByCategories.length === 0 && <NoData/> }

          <ChartContainer>
            <VictoryPie
              data={totalByCategories}
              colorScale={totalByCategories.map(category => category.color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: "bold",
                  fill: theme.colors.shape
                }
              }}
              labelRadius={50}
              x="percent"
              y="total"
              height={RFPercentage(35)}
              padding={0}
            />
          </ChartContainer>

          {
            totalByCategories.map(item => (
              <HistoryCard
                key={item.key}
                title={item.name}
                amount={item.totalFormatted}
                color={item.color}
              />
            ))
          }
        </Content>
      }
    </Container>
  )
}
