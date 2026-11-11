import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { games } from './data/games';

const Home = () => {

  return (
    <div className='mx-auto max-w-125 flex flex-col justify-start items-center'>
      <h1 className='pt-20 text-center text-5xl sm:text-6xl font-semibold font-fredoka'>
        Games by NVP
      </h1>
      <p className='text-lg sm:text-xl font-bold my-3'>
        Le compteur de scores de tes soirées jeu
      </p>
      <p className='text-sm mb-20'>••••••••••••••••••••••••••••</p>

      {games.map((game) => (
        <Link
          key={game.name}
          href={game.url}
          className={`card relative w-[80%] h-36 mb-8 overflow-hidden flex justify-center items-center ${game.color}`}
        >
          <h2 className='z-11 font-fredoka text-7xl text-center font-bold text-light text-shadow-[0_7px_0_#1F1B3D,3px_0_0_#1F1B3D,-3px_0_0_#1F1B3D,0_-3px_0_#1F1B3D]'>
            {game.name}
          </h2>
          <div className='z-10 absolute flex items-center gap-1 bottom-1.5 right-1.5 border-3 border-dark bg-light rounded-full px-3 py-1'>
            <span className='text-xl font-fredoka font-semibold'>Jouer</span>
            <ArrowRight size={20} strokeWidth={3} />
          </div>
          {game.deco}
        </Link>
      ))}
    </div>
  );
};

export default Home;
