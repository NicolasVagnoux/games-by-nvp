import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const HomeButton = () => {
  return (
    <Link href='/' className='py-8 self-start'>
      <button className='card flex items-center pl-1 pr-3 py-1 bg-light text-lg font-extrabold shadow-[0px_3px_0px_#1F1B3D]!'>
        <ChevronDown className='rotate-90' />
        <span>Home</span>
      </button>
    </Link>
  );
};

export default HomeButton;
