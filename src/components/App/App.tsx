import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage';
import InfoPage from '../../pages/InfoPage';
import Page404 from '../../pages/Page404';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path=":name"
          element={<InfoPage />}
        />
        <Route
          path="*"
          element={<Page404 />}
        />
      </Route>
    </Routes>
  );
};

export default App;

