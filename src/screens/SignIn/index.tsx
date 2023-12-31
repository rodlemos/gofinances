import React from 'react';
import { Alert, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import SignInSocialButton from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth';
import { Container, Footer, FooterWrapper, Header, SignInTitle, Title, TitleWrapper } from './styles';

export default function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta google");
    }
  }

  async function handleSignInWithApple() {
    try {
      await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Apple");
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>Controle suas {`\n`}
            finanças de forma {`\n`}
            muito simples</Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {`\n`}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            svg={GoogleSvg}
            title="Entrar com Google"
            onPress={handleSignInWithGoogle}
          />

          {Platform.OS === "ios"
            && <SignInSocialButton
              svg={AppleSvg}
              title="Entrar com Apple"
              onPress={handleSignInWithApple}
            />}
        </FooterWrapper>
      </Footer>
    </Container>
  )
}
