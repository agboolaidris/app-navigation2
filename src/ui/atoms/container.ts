import styled from '@emotion/native';
import {Theme} from '@emotion/react';

export const Container = styled.SafeAreaView<{theme?: Theme}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.dominant50};
  flex: 1;
`;
