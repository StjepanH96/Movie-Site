import { NavigationBar } from './NavigationBar';
import {
  HeaderContainer,
  Logo,
  Container,
} from '@/styled-components/HeaderStyles';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MovieWatch</Logo>
      <Container>
        <NavigationBar />
      </Container>
    </HeaderContainer>
  );
};
