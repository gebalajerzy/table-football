import { TableCell, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Match } from "./UserProfile.tsx";

interface MatchProps {
    match: Match;
    index: number
}

const MatchTableRow: React.FC<MatchProps> = ({match, index }) => {
    return (
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

    );
};

export default MatchTableRow;