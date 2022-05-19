import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage';
import InfoPage from '../../pages/InfoPage';

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
      </Route>
    </Routes>
  );
};

export default App;

