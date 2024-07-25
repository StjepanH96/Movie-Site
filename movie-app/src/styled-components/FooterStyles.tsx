import { styled } from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  justify-content: space-between;

  @media (max-width: 768px) {
    min-height: 100vh;
  }
`;

const PositionFooter = styled.div`
  flex: 1;
`;

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
`;

export { PageWrapper, StyledFooter, PositionFooter };
