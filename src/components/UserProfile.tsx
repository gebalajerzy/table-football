import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar } from '@mui/material';
import MatchTable from './MatchTable'; // Import the MatchTable component

// Define the shape of the URL parameters
interface Params {
    nickname: string;
}

// Define the structure of a match
interface Match {
    teamAPlayer1: string;
    teamAPlayer2: string;
    teamBPlayer1: string;
    teamBPlayer2: string;
    date: string;
    result: number;
}

// Mock data for matches
const matches: Match[] = [
    { teamAPlayer1: 'Alice', teamAPlayer2: 'Bob', teamBPlayer1: 'Charlie', teamBPlayer2: 'Diana', date: '2023-10-15', result: 5 },
    { teamAPlayer1: 'Eve', teamAPlayer2: 'Frank', teamBPlayer1: 'Alice', teamBPlayer2: 'Charlie', date: '2023-10-16', result: -3 },
    { teamAPlayer1: 'Ivan', teamAPlayer2: 'Judy', teamBPlayer1: 'Mallory', teamBPlayer2: 'Alice', date: '2023-10-17', result: 7 },
    // Add more matches as needed
];

const UserProfile: React.FC = () => {
    const { nickname } = useParams<Params>(); // Extract the nickname from the URL

    // Filter matches that involve the current user
    const userMatches = matches.filter(match =>
        [match.teamAPlayer1, match.teamAPlayer2, match.teamBPlayer1, match.teamBPlayer2].includes(nickname ?? '')
    );

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
            <Avatar sx={{ width: 100, height: 100, mb: 2 }}>
                {nickname ? nickname.charAt(0).toUpperCase() : 'U'}
            </Avatar>
            <Typography variant="h4">{nickname}</Typography>
            <Typography variant="body1" color="textSecondary" mb={3}>
                Profile page for {nickname}. Below are their recent matches.
            </Typography>

            {/* Display user's matches using the MatchTable component */}
            <Box width="100%" maxWidth={1200}>
                <MatchTable matches={userMatches} />
            </Box>
        </Box>
    );
};

export default UserProfile;