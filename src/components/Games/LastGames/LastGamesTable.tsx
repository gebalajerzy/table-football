import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Game } from '../../../service/game.service.ts';
import LastGamesTableRow from './LastGamesTableRow';

interface LastGamesTableProps {
    matches: Game[];
}

const LastGamesTable: React.FC<LastGamesTableProps> = ({ matches }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Team A</TableCell>
                        <TableCell>Team B</TableCell>
                        <TableCell>Score Change</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {matches.map((match, index) => (
                        <LastGamesTableRow key={index} match={match} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LastGamesTable;
