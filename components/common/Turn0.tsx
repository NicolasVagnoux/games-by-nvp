import { ArrowRight, Minus, Plus } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ContinueButton from './Buttons/ContinueButton';
import { playerColors } from '@/app/data/colors';

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
      })),
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
    <div className='w-full flex flex-col justify-start items-center gap-y-8'>
      <div className='w-full card p-5 bg-light'>
        <p className='text-2xl font-semibold font-fredoka mb-5'>
          Nombre de joueurs :
        </p>
        <div className='flex justify-between items-center gap-6'>
          <button
            className='card h-15 w-15 min-w-15 bg-sun flex items-center justify-center font-fredoka font-bold text-5xl rounded-full! shadow-[0px_5px_0px_#1F1B3D]!'
            onClick={() => nbPlayers > 0 && setNbPlayers(nbPlayers - 1)}
          >
            <Minus strokeWidth={3} className='scale-120' />
          </button>
          <p className='card w-full shadow-none! rounded-xl! bg-white font-fredoka font-bold text-4xl h-15 flex justify-center items-center'>
            {nbPlayers}
          </p>
          <button
            className='card h-15 w-15 min-w-15 bg-sun flex items-center justify-center font-fredoka font-bold text-5xl rounded-full! shadow-[0px_5px_0px_#1F1B3D]!'
            onClick={() => setNbPlayers(nbPlayers + 1)}
          >
            <Plus strokeWidth={3} className='scale-120' />
          </button>
        </div>
      </div>

      {!!nbPlayers && (
        <div className='w-full flex flex-col justify-start items-center gap-4'>
          {scores.map((score, i) => (
            <div key={i} className='w-full flex justify-between items-center gap-2'>
              <div className={`card h-14 w-14 min-w-14 ${playerColors[i%6]} shadow-none! rounded-full! font-fredoka font-bold text-2xl flex justify-center items-center`}>
                {i+1}
              </div>
              <input
                type='text'
                placeholder='Nom du joueur'
                className='w-full card p-2 bg-white font-bold text-xl rounded-xl! shadow-none! h-14 focus:outline-none'
                required
                value={score.player}
                onChange={(e) => handlePlayerNameChange(i, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}
      {!!scores.length && scores.every((score) => score.player) && (
        <ContinueButton
          text='Continuer'
          onClick={() => setTurn(1)}
          icon={<ArrowRight size={26} strokeWidth={3} />}
        />
      )}
    </div>
  );
};

export default Turn0;
