'use client';
import HalfTurn from '@/components/flip7/HalfTurn';
import Turn from '@/components/common/Turn';
import Turn0 from '@/components/common/Turn0';
import Link from 'next/link';
import { useState } from 'react';

const Flip7 = () => {
  const [turn, setTurn] = useState<number>(0);
  const [scores, setScores] = useState<{ player: string; score: number }[]>([]);

  const renderTurn = () => {
    if (turn === 0) {
      return <Turn0 setTurn={setTurn} scores={scores} setScores={setScores} />;
    };
    if (turn % 1 === 0) {
      return <Turn
        description='Notez le nombre de points remportés sur cette manche par chaque joueur :'
        turn={turn}
        setTurn={setTurn}
        scores={scores}
        setScores={setScores}
      />;
    };
    if (turn % 1 === 0.5) {
      return <HalfTurn
        turn={turn}
        setTurn={setTurn}
        scores={scores}
      />;
    }
  };

  return (
    <div className='px-5 mx-auto max-w-125 flex flex-col justify-start items-center'>
      <Link href='/' className='pt-3 self-start'>
        {'< Home'}
      </Link>
      <h1 className='pt-6 pb-12 text-center text-5xl font-semibold'>Flip 7</h1>
      {renderTurn()}
    </div>
  );
};

export default Flip7;
