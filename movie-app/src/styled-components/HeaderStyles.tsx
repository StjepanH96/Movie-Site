import { styled } from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #141414;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  color: #e2b616;
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export { HeaderContainer, Logo, Container };
