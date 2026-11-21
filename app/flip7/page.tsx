'use client';
import HalfTurn from '@/components/common/HalfTurn';
import Turn from '@/components/common/Turn';
import Turn0 from '@/components/common/Turn0';
import { useState } from 'react';
import Layout from '@/components/common/Layout';
import HomeButton from '@/components/common/Buttons/HomeButton';
import GameTitle from '@/components/common/GameTitle';

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
        conditionsToEndGame={{ score: 200, higherOrLowerToWin: 'higher' }}
      />;
    }
  };

  return (
    <Layout className='px-5'>
      <HomeButton />
      <GameTitle text='Flip 7' />
      {renderTurn()}
    </Layout>
  );
};

export default Flip7;
