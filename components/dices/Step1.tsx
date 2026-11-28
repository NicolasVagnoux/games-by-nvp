import { Dispatch, SetStateAction } from 'react';
import ContinueButton from '../common/Buttons/ContinueButton';
import { ArrowRight } from 'lucide-react';

type Step1Props = {
  setStep: Dispatch<SetStateAction<number>>;
  diceParams: { nbDices: number; nbSides: number };
  setDiceParams: Dispatch<SetStateAction<{ nbDices: number; nbSides: number }>>;
};

const Step1 = ({ setStep, diceParams, setDiceParams }: Step1Props) => {
  const updateDiceNumber = (moreOrLess: 'more' | 'less') => {
    if (moreOrLess === 'more') {
      if (diceParams.nbDices === 6) return;
      setDiceParams({ ...diceParams, nbDices: diceParams.nbDices + 1 });
    } else {
      if (diceParams.nbDices === 1) return;
      setDiceParams({ ...diceParams, nbDices: diceParams.nbDices - 1 });
    }
  };

  const updateSideNumber = (moreOrLess: 'more' | 'less') => {
    if (moreOrLess === 'more') {
      if (diceParams.nbSides === 20) return;
      setDiceParams({ ...diceParams, nbSides: diceParams.nbSides + 1 });
    } else {
      if (diceParams.nbSides === 4) return;
      setDiceParams({ ...diceParams, nbSides: diceParams.nbSides - 1 });
    }
  };

  return (
    <div className='w-full flex flex-col justify-start items-center gap-y-5'>
      <p className='w-full text-2xl'>Nombre de dés :</p>
      <div className='w-full flex items-center gap-2 text-2xl'>
        <button onClick={() => updateDiceNumber('less')}>-</button>
        <p>{diceParams.nbDices}</p>
        <button onClick={() => updateDiceNumber('more')}>+</button>
      </div>

      <p className='w-full text-2xl'>Nombre de faces :</p>
      <div className='w-full flex items-center gap-2 text-2xl'>
        <button onClick={() => updateSideNumber('less')}>-</button>
        <p>{diceParams.nbSides}</p>
        <button onClick={() => updateSideNumber('more')}>+</button>
      </div>

      <ContinueButton
        text='Continuer'
        onClick={() => setStep(2)}
        icon={<ArrowRight size={26} strokeWidth={3} />}
      />
    </div>
  );
};

export default Step1;
