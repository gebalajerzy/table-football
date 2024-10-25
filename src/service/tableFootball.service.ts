import axios, { AxiosResponse } from 'axios';

export interface ListResponse<T> {
  items: T[];
}

export interface Game {
  teamA: string[];
  teamB: string[];
  winner: 'teamA' | 'teamB';
  scoreChange: number;
  date: string;
}

const footballService = axios.create({ baseURL: 'http://localhost:5173' });

export const getLastGames = async (): Promise<AxiosResponse<ListResponse<Game>>> => {
  return footballService.get('/games');
};
