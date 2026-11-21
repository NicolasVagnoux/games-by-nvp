import { Dispatch, SetStateAction, useState } from 'react';
import ContinueButton from './Buttons/ContinueButton';
import { ArrowRight } from 'lucide-react';
import { playerColors } from '@/app/data/colors';

type TurnProps = {
  description: string;
  turn: number;
  setTurn: Dispatch<SetStateAction<number>>;
  scores: { player: string; score: number }[];
  setScores: Dispatch<SetStateAction<{ player: string; score: number }[]>>;
};

const Turn = ({ description, turn, setTurn, scores, setScores }: TurnProps) => {

  const [turnValues, setTurnValues] = useState<number[]>(() =>
    scores.map(() => 0),
  );

  return (
    <div className='-mt-3 w-full flex flex-col justify-start items-center gap-y-6'>
      <h3 className='card bg-light px-5 py-1.5 text-2xl font-fredoka font-semibold rounded-full! shadow-[0px_4px_0px_#1F1B3D]!'>
        Tour {turn}
      </h3>
      <p className='text-center text-xl font-bold'>{description}</p>
      {scores.map((score, i) => (
        <div key={i} className='w-full grid grid-cols-[56px_1.25fr_1fr] items-center p-4 card bg-light'>
          <div
            className={`card h-14 w-14 min-w-14 ${playerColors[i % 6]} shadow-none! rounded-full! font-fredoka font-bold text-2xl flex justify-center items-center`}
          >
            {i + 1}
          </div>
          <p className='pl-3 text-3xl font-fredoka font-semibold truncate'>
            {score.player}
          </p>
          <input
            type='number'
            min={0}
            className='card bg-white w-full h-15 text-center text-4xl font-fredoka font-bold rounded-2xl! shadow-none!'
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
      <ContinueButton
          text='Continuer'
          className='mt-8!'
          onClick={() => {
          setScores((prev) =>
            prev.map((score, i) => ({
              ...score,
              score: score.score + turnValues[i],
            })),
          );
          setTurn(turn + 0.5);
        }}
          icon={<ArrowRight size={26} strokeWidth={3} />}
      />
    </div>
  );
};

export default Turn;
