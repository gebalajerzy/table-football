import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Define the structure of a match
interface Match {
    teamAPlayer1: string;
    teamAPlayer2: string;
    teamBPlayer1: string;
    teamBPlayer2: string;
    date: string; // Format as "YYYY-MM-DD" or another format as needed
    result: number;
}

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
                        <TableRow
                            key={index}
                            sx={{
                                backgroundColor: match.result > 0 ? '#d4edda' : '#f8d7da', // Light green for positive, light red for negative
                            }}
                        >
                            <TableCell>
                                <Typography component="div">
                                    <Link to={`/user/${match.teamAPlayer1}`} style={{ textDecoration: 'none' }}>
                                        {match.teamAPlayer1}
                                    </Link>
                                    /
                                    <Link to={`/user/${match.teamAPlayer2}`} style={{ textDecoration: 'none' }}>
                                        {match.teamAPlayer2}
                                    </Link>
                                    {" vs "}
                                    <Link to={`/user/${match.teamBPlayer1}`} style={{ textDecoration: 'none' }}>
                                        {match.teamBPlayer1}
                                    </Link>
                                    /
                                    <Link to={`/user/${match.teamBPlayer2}`} style={{ textDecoration: 'none' }}>
                                        {match.teamBPlayer2}
                                    </Link>
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {match.date}
                                </Typography>
                            </TableCell>
                            <TableCell>{match.result > 0 ? `+${match.result}` : `${match.result}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MatchTable;
