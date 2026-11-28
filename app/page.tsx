import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { games, tools } from './data/games';
import Layout from '@/components/common/Layout';

const Home = () => {
  return (
    <Layout>
      <h1 className='pt-16 text-center text-5xl sm:text-6xl font-bold font-fredoka'>
        Games by NVP
      </h1>
      <p className='text-lg sm:text-xl font-bold my-3'>
        Le compteur de scores de tes soirées jeu
      </p>
      <p className='text-sm mb-16'>••••••••••••••••••••••••••••</p>

      {games.map((game) => (
        <Link
          key={game.name}
          href={game.url}
          className={`card relative w-[80%] h-40 mb-8 overflow-hidden flex justify-center items-center ${game.color}`}
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

      <div className='mt-6 mb-6 w-[80%] flex items-center gap-5'>
        <h3 className='text-4xl font-fredoka font-bold text-left'>Outils</h3>
        <div className='w-full border border-dark'></div>
      </div>
      <div className='w-[80%] grid grid-cols-2 gap-x-3 gap-y-5'>
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.url}
            className={`card relative w-full h-36 overflow-hidden flex justify-center items-center ${tool.color}`}
          >
            <h2 className='z-11 font-fredoka text-5xl text-center font-bold text-light text-shadow-[0_7px_0_#1F1B3D,3px_0_0_#1F1B3D,-3px_0_0_#1F1B3D,0_-3px_0_#1F1B3D]'>
              {tool.name}
            </h2>
            {tool.deco}
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
