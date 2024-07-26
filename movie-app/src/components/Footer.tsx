import {
  PageWrapper,
  StyledFooter,
  PositionFooter,
} from '@/styled-components';

export const Footer = () => {
  return (
    <PageWrapper>
      <PositionFooter></PositionFooter>
      <StyledFooter>
        <div>
          <p>&copy; 2024 MovieApp. All rights reserved.</p>
          <p>
            <a href="/terms">Terms of Service</a> |{' '}
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </StyledFooter>
    </PageWrapper>
  );
};
