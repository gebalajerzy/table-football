import { useGetGames } from './useGetGames.ts';
import { useMemo } from 'react';

export const UserGames = () => {
  const { data, isLoading } = useGetGames();
  const games = useMemo(() => data?.pages.flatMap(page => page.items), [data]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <div>
    {
      games?.map(game => (
        <div>
          {game.teamA.join(' ')} vs {game.teamB.join(' ')}
        </div>
      ))
    }
  </div>
};