import Error from '../404/404';
// import FavoritesEmpty from '../favorites/favorites-empty';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import Offer from '../offer/offer';
// import MainEmpty from '../main/main-empty';
import { Routes, Route /*, Outlet, Link*/ } from 'react-router-dom';

const App = (): JSX.Element => (
  <Routes>
    <Route index element={<Main />} />
    <Route path="login" element={<Login />} />
    <Route path="favorites" element={<Favorites />} />
    <Route path="offer/:id" element={<Offer />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export default App;
