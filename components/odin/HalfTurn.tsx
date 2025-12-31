import React, { Dispatch, SetStateAction } from 'react';

type HalfTurnProps = {
  turn: number;
  setTurn: Dispatch<SetStateAction<number>>;
  scores: { player: string; score: number }[];
};

const HalfTurn = ({ turn, setTurn, scores }: HalfTurnProps) => {
  const endGame = scores.some((score) => score.score >= 15);

  const minScore = Math.min(...scores.map((s) => s.score));
  const winners = scores.filter((s) => s.score === minScore);

  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <h3 className='text-2xl'>Tour {turn - 0.5}</h3>
      <p className=' text-2xl mb-6 mt-6'>
        {endGame ? 'Fin de partie !' : 'Scores actuels :'}
      </p>
      {scores.map((score, i) => (
        <p key={i} className='text-xl w-full text-center mb-3'>
          {score.player} : {score.score}
        </p>
      ))}
      {endGame ? (
        <p className='text-2xl mt-8 font-semibold text-green-600'>
          Gagnant(s) : {winners.map((w) => w.player).join(' / ')}
        </p>
      ) : (
        <button
          onClick={() => {
            setTurn(turn + 0.5);
          }}
          className='cursor-pointer py-2 px-5 border rounded-lg shadow-2xl font-semibold mt-5'
        >
          Continuer
        </button>
      )}
    </div>
  );
};

export default HalfTurn;
