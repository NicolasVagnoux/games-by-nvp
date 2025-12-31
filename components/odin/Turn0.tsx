import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Turn1Props = {
  setTurn: Dispatch<SetStateAction<number>>;
  scores: { player: string; score: number }[];
  setScores: Dispatch<SetStateAction<{ player: string; score: number }[]>>;
};

const Turn0 = ({ setTurn, scores, setScores }: Turn1Props) => {
  const [nbPlayers, setNbPlayers] = useState<number>(0);

  useEffect(() => {
    setScores((prevScores) =>
      Array.from({ length: nbPlayers }, (_, index) => ({
        player: prevScores[index]?.player ?? '',
        score: prevScores[index]?.score ?? 0,
      }))
    );
  }, [nbPlayers]);

  const handlePlayerNameChange = (i: number, value: string) => {
    setScores((prev) => {
      const copy = [...prev];
      copy[i] = {
        ...copy[i],
        player: value,
      };
      return copy;
    });
  };

  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <label htmlFor='nbPlayers' className='w-full text-xl mb-2'>
        Nombre de joueurs :
      </label>
      <input
        min={0}
        max={6}
        onChange={(e) => setNbPlayers(Number(e.target.value))}
        id='nbPlayers'
        className='p-2 w-full bg-white rounded mb-12'
        type='number'
      />

      {!!nbPlayers && (
        <div className='w-full flex flex-col justify-start items-center gap-3'>
          {scores.map((score, i) => (
            <input
              key={i}
              type='text'
              placeholder='Nom du joueur'
              className='w-full p-2 bg-white rounded'
              required
              value={score.player}
              onChange={(e) => handlePlayerNameChange(i, e.target.value)}
            />
          ))}
        </div>
      )}
      {!!scores.length && scores.every((score) => score.player) && (
        <button
          onClick={() => setTurn(1)}
          className='cursor-pointer py-2 px-5 border rounded-lg shadow-2xl font-semibold mt-5'
        >
          Continuer
        </button>
      )}
    </div>
  );
};

export default Turn0;
