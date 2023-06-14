import React from 'react';
import Input from '.';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

describe("Input Component", () => {
  it("should be able to aply color to a focused input", () => {
    const { getByTestId } = render(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
      />,
      {
        wrapper: Providers
      }
    );

    const inputComponent = getByTestId("input-email");
    expect(inputComponent.props.style[0].backgroundColor)
      .toEqual(theme.colors.shape);
  });
});