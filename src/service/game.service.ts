export interface Game {
    teamA: string[];
    teamB: string[];
    winner: 'teamA' | 'teamB';
    scoreChange: number;
    date: string;  // New date field in ISO format
}

export const fetchLastGames = async (): Promise<Game[]> => {
    // Simulate a delay to mock an HTTP request
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
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
    ];
};