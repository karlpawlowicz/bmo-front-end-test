import styled from 'styled-components';

import { display, flex, theme } from '../../GlobalStyle';

export const ListItem = styled.li`
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 24px;
  padding-right: 15px;
  padding-left: 15px;
  ${display};
  ${flex};

  @media (min-width: ${theme.screens.md}) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

export const ListItemContent = styled.div`
  padding: 24px;
  border-radius: 8px;
  background: #f5f5f5;
  width: 100%;
`;
