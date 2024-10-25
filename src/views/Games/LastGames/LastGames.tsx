import React, { useEffect, useState } from "react";
import { Game } from "../../../service/game.service.ts";
import { fetchLastGames } from "../../../service/game.service.ts";
import LastGamesTable from "../../../components/Games/LastGames/LastGamesTable.tsx";
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
        <LastGamesTable matches={games} />
      </div>
  );
};