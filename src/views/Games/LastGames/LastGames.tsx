import React, { useEffect, useState } from "react";
import { Game } from "../../../types/Game.ts";
import { fetchLastGames } from "../../../service/game.service.ts";
import './LastGames.css';

export const LastGames: React.FC = () => {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchLastGames();
      setGames(data);
    };

    loadGames();
  }, []);

  return (
      <div>
        <h1>Last Games</h1>
        <table>
          <thead>
          <tr>
            <th>Team A</th>
            <th>Team B</th>
            <th>Score Change</th>
            <th>Date</th>
          </tr>
          </thead>
          <tbody>
          {games.map((match, index) => (
              <tr key={index}>
                <td className={match.winner === 'teamA' ? 'team-winner' : 'team-loser'}>{match.teamA.join(', ')}</td>
                <td className={match.winner === 'teamB' ? 'team-winner' : 'team-loser'}>{match.teamB.join(', ')}</td>
                <td>{match.scoreChange}</td>
                <td>{new Date(match.date).toLocaleDateString()}</td> {/* Format Date */}
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};