import { useInfiniteQuery } from 'react-query';
import { getLastGames } from '../../service/tableFootball.service.ts';

export const useGetGames = () => {
  return useInfiniteQuery(
    ['allGames'],
    () => getLastGames().then(({ data }) => data)
  );
};