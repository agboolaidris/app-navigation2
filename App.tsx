import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/assets/theme';
import Navigation from './src/navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
