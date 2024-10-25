import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Match } from "./UserProfile.tsx";
import MatchTableRow from "./MatchTableRow.tsx";

// Define the props for the MatchTable component
interface MatchTableProps {
    matches: Match[];
}

const MatchTable: React.FC<MatchTableProps> = ({ matches }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Match</strong></TableCell>
                        <TableCell><strong>Result</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {matches.map((match, index) => (
                        <MatchTableRow match={match} key={index} />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MatchTable;
