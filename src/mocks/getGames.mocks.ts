import { http, HttpResponse } from 'msw';

export const getGamesMocks = http.get('http://localhost:5173/games', () => {

  return HttpResponse.json(
    {
      items: [
        {
          teamA: ['user1', 'user2'],
          teamB: ['user3', 'user4'],
          winner: 'teamA',
          scoreChange: 15,
          date: '2023-10-20T14:48:00.000Z',
        },
        {
          teamA: ['user5', 'user6'],
          teamB: ['user7', 'user8'],
          winner: 'teamB',
          scoreChange: 10,
          date: '2023-10-18T09:30:00.000Z',
        },
        // Add more mock matches as needed
      ]
    }
  )
});
