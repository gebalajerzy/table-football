import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Rank } from './views/Games/Rank/Rank.tsx';
import { LastGames } from './views/Games/LastGames/LastGames.tsx';
import { AddMatch } from './views/AddMatch/AddMatch.tsx';
import { UserRegister } from './views/User/UserRegister/UserRegister.tsx';
import { UserGames } from './views/User/UserGames.tsx';

const AppRoutes: FunctionComponent = () => (
    <Routes>
      <Route index path={'/'} element={<Rank />} />
      <Route index path={'/rank'} element={<Rank />} />
      <Route path={'/last-games'} element={<LastGames />} />
      <Route path={'/add-match'} element={<AddMatch />} />
      <Route path={'/register'} element={<UserRegister />} />
      <Route path={'/games'} element={<UserGames />} />
    </Routes>
);

export default AppRoutes;
