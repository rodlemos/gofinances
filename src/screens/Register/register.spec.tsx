import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Register } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

describe('Register Screen', () => {
  it("should open category select modal when pressed the button", () => {
    const { getByTestId } = render(<Register/>, {wrapper: Providers});
    
    const categoryModal = getByTestId("modal-category");
    fireEvent.press(categoryModal)
    expect(categoryModal.props.visible).toBeFalsy();
  });
});
