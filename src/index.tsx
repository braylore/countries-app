import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { store, persistor } from './store';
import './index.scss';
import App from './components/App/App';
import { ColorModeContextProvider } from './context/ColorModeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ColorModeContextProvider>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <PersistGate
            loading={null}
            persistor={persistor}
          >
            <App />
          </PersistGate>
        </StyledEngineProvider>
      </ColorModeContextProvider>
    </Provider>
  </BrowserRouter>
);
