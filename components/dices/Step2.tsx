import { Dispatch, SetStateAction, useState } from 'react';
import ContinueButton from '../common/Buttons/ContinueButton';
import { Dices } from 'lucide-react';

type Step2Props = {
  setStep: Dispatch<SetStateAction<number>>;
  diceParams: { nbDices: number; nbSides: number };
  setDiceParams: Dispatch<SetStateAction<{ nbDices: number; nbSides: number }>>;
};

const Step2 = ({ setStep, diceParams, setDiceParams }: Step2Props) => {
  const [showDices, setShowDices] = useState<boolean>(false);
  const [diceValues, setDiceValues] = useState<number[]>([]);

  const rollDices = () => {
    const { nbDices, nbSides } = diceParams;
    const values = [];
    let n = 1;
    while (n <= nbDices) {
      values.push(Math.floor(Math.random() * nbSides) + 1);
      n++;
    }
    setDiceValues(values);
    setShowDices(true);
  };

  return (
    <div className='w-full flex flex-col justify-start items-center gap-y-5'>
      <p className='w-full text-2xl'>
        {diceParams.nbDices} dé{diceParams.nbDices > 1 ? 's' : ''} ---{' '}
        {diceParams.nbSides} faces
      </p>
      <ContinueButton
        text={showDices ? 'Relancer les dés' : 'Lancer les dés'}
        onClick={() => {
          rollDices();
        }}
        icon={<Dices size={28} strokeWidth={2.5} />}
      />
      {showDices && (
        <div className='w-full grid grid-cols-2'>
          {diceValues.map((value, i) => (
            <p key={i} className='text-3xl text-center'>{value}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Step2;
