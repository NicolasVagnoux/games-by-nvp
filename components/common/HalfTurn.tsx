import { Dispatch, SetStateAction } from 'react';
import { playerColors } from '@/app/data/colors';
import ContinueButton from './Buttons/ContinueButton';
import { ArrowRight, Crown, RotateCcw } from 'lucide-react';

type HalfTurnProps = {
  turn: number;
  setTurn: Dispatch<SetStateAction<number>>;
  scores: { player: string; score: number }[];
  conditionsToEndGame: { score: number; higherOrLowerToWin: 'higher' | 'lower' };
};

const HalfTurn = ({
  turn,
  setTurn,
  scores,
  conditionsToEndGame,
}: HalfTurnProps) => {
  const endGame = scores.some((score) => score.score >= conditionsToEndGame.score);

  const winningScore =
    conditionsToEndGame.higherOrLowerToWin == 'higher'
      ? Math.max(...scores.map((s) => s.score))
      : Math.min(...scores.map((s) => s.score));
  const winners = scores.filter((s) => s.score === winningScore);

  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <h3 className='card bg-light px-5 py-1.5 text-xl font-fredoka font-semibold rounded-full! shadow-none!'>
        Tour {turn - 0.5}
      </h3>
      <p className='text-4xl my-4 font-fredoka font-semibold'>
        {endGame ? 'Fin de partie !' : 'Scores actuels :'}
      </p>
      {endGame && (
        <div className='relative w-full my-8 px-5 pb-5 pt-10 card bg-victory flex flex-col justify-start items-center gap-3'>
          <p className='text-xl font-bold'>Gagnant(s) :</p>
          <p className='text-5xl font-fredoka font-bold text-center'>
            {winners.map((w) => w.player).join(' / ')}
          </p>
          <p className='text-3xl font-fredoka font-bold'>
            {winners[0].score} pts
          </p>
          <div className='absolute h-16 w-16 rounded-full flex justify-center items-center bg-sun -top-8 left-[50%] translate-x-[-50%] border-3 border-dark'>
            <Crown size={32} strokeWidth={2} fill='white' />
          </div>
        </div>
      )}
      <div className='flex flex-col w-full items-center gap-y-5'>
        {scores
          .toSorted((a, b) =>
            conditionsToEndGame.higherOrLowerToWin == 'higher'
              ? b.score - a.score
              : a.score - b.score,
          )
          .map((score, i) => (
            <div
              key={i}
              className='w-full grid grid-cols-[56px_1.25fr_1fr] items-center px-4 py-3 card bg-light'
            >
              <div
                className={`card h-14 w-14 min-w-14 ${playerColors[i % 6]} shadow-none! rounded-full! font-fredoka font-bold text-2xl flex justify-center items-center`}
              >
                {i + 1}
              </div>
              <p className='pl-3 text-3xl font-fredoka font-semibold truncate'>
                {score.player}
              </p>
              <p className='text-4xl font-fredoka font-bold text-end'>
                {score.score}
              </p>
            </div>
          ))}
      </div>
      {endGame ? (
        <>
          <ContinueButton
            text='Rejouer'
            onClick={() => setTurn(0)}
            icon={<RotateCcw size={24} strokeWidth={3} />}
            className='mt-8'
          />
        </>
      ) : (
        <ContinueButton
          text='Continuer'
          onClick={() => setTurn(turn + 0.5)}
          icon={<ArrowRight size={26} strokeWidth={3} />}
          className='mt-8'
        />
      )}
    </div>
  );
};

export default HalfTurn;
