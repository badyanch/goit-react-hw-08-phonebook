import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 267px;
  padding-left: 406px;
`;

export const SectionTitle = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Title = styled.p`
  margin-bottom: 8.5px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Text = styled.p`
  max-width: 380px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.secondary};
`;
