import { useState, useMemo, createContext, ReactNode, FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

export const ColorModeContext = createContext<IColorModeContext>({
  // eslint-disable-next-line
  toggleColorMode: () => {},
  mode: 'light'
});

interface IColorModeContextProvider {
  children: ReactNode;
}

export const ColorModeContextProvider: FC<IColorModeContextProvider> = ({ children }) => {
  let localStorageMode: 'light' | 'dark' | '' = '';
  if (localStorage.getItem('mode')) {
    localStorageMode = localStorage.getItem('mode') as 'light' | 'dark';
  }
  const [mode, setMode] = useState<'light' | 'dark'>(localStorageMode || 'light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
      },
      mode
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#dbd1c2',
                  dark: '#c5b9a7'
                },
                background: {
                  default: '#f1ede8',
                  paper: '#dbd1c2'
                }
              }
            : {
                primary: {
                  main: '#2a446b',
                  dark: '#345381'
                },
                background: {
                  default: '#15223c',
                  paper: '#2a446b'
                }
              })
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
