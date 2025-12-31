'use client';
import HalfTurn from '@/components/odin/HalfTurn';
import Turn from '@/components/odin/Turn';
import Turn1 from '@/components/odin/Turn0';
import Link from 'next/link';
import { useState } from 'react';

const Odin = () => {
  const [turn, setTurn] = useState<number>(0);
  const [scores, setScores] = useState<{ player: string; score: number }[]>([]);

  const renderTurn = () => {
    if (turn === 0) {
      return <Turn1 setTurn={setTurn} scores={scores} setScores={setScores} />;
    };
    if (turn % 1 === 0) {
      return <Turn
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
      <h1 className='pt-6 pb-12 text-center text-5xl font-semibold'>Odin</h1>
      {renderTurn()}
    </div>
  );
};

export default Odin;
