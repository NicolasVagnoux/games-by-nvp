'use client';
import HomeButton from '@/components/common/Buttons/HomeButton';
import GameTitle from '@/components/common/GameTitle';
import Layout from '@/components/common/Layout';
import Step1 from '@/components/dices/Step1';
import Step2 from '@/components/dices/Step2';
import { useState } from 'react';

const Dices = () => {
  const [step, setStep] = useState<number>(1);
  const [diceParams, setDiceParams] = useState<{
    nbDices: number;
    nbSides: number;
  }>({ nbDices: 1, nbSides: 6 });

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            setStep={setStep}
            diceParams={diceParams}
            setDiceParams={setDiceParams}
          />
        );
      case 2:
        return (
          <Step2
            setStep={setStep}
            diceParams={diceParams}
            setDiceParams={setDiceParams}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <Layout className='px-5'>
      <HomeButton />
      <GameTitle text='Dés' />
      {renderStep()}
    </Layout>
  );
};

export default Dices;
