export interface Game {
    teamA: string[];
    teamB: string[];
    winner: 'teamA' | 'teamB';
    scoreChange: number;
    date: string;  // New date field in ISO format
}