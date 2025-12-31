import React, { Dispatch, SetStateAction, useState } from 'react';

type TurnProps = {
  turn: number;
  setTurn: Dispatch<SetStateAction<number>>;
  scores: { player: string; score: number }[];
  setScores: Dispatch<SetStateAction<{ player: string; score: number }[]>>;
};

const Turn = ({ turn, setTurn, scores, setScores }: TurnProps) => {
  const [turnValues, setTurnValues] = useState<number[]>(() =>
    scores.map(() => 0)
  );

  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <h3 className='text-2xl'>Tour {turn}</h3>
      <p className='mb-6 mt-2'>
        Notez le nombre de cartes restantes de chaque joueur :
      </p>
      {scores.map((score, i) => (
        <div
          key={i}
          className='w-full flex flex-col justify-start items-start mb-5'
        >
          <label className='text-xl'>{score.player}</label>
          <input
            type='number'
            min={0}
            className='bg-white w-full p-2 rounded'
            value={turnValues[i] || ''}
            onChange={(e) => {
              const value = Number(e.target.value);
              setTurnValues((prev) => {
                const copy = [...prev];
                copy[i] = value;
                return copy;
              });
            }}
          />
        </div>
      ))}
      <button
        onClick={() => {
          setScores((prev) =>
            prev.map((score, i) => ({
              ...score,
              score: score.score + turnValues[i],
            }))
          );
          setTurn(turn + 0.5);
        }}
        className='cursor-pointer py-2 px-5 border rounded-lg shadow-2xl font-semibold mt-5'
      >
        Continuer
      </button>
    </div>
  );
};

export default Turn;
