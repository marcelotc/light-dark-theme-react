import React from 'react';
import Header from './components/Header';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle></GlobalStyle>
        <Header toggleTheme={toggleTheme}></Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
