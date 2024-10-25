import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Game } from '../../../service/game.service.ts';

interface LastGamesTableRowProps {
    match: Game;
}

const LastGamesTableRow: React.FC<LastGamesTableRowProps> = ({ match }) => {
    return (
        <TableRow>
            <TableCell
                style={{
                    backgroundColor: match.winner === 'teamA' ? '#d4edda' : '#f8d7da',
                }}
            >
                {match.teamA.join(', ')}
            </TableCell>
            <TableCell
                style={{
                    backgroundColor: match.winner === 'teamB' ? '#d4edda' : '#f8d7da',
                }}
            >
                {match.teamB.join(', ')}
            </TableCell>
            <TableCell>{match.scoreChange}</TableCell>
            <TableCell>{new Date(match.date).toLocaleDateString()}</TableCell>
        </TableRow>
    );
};

export default LastGamesTableRow;
