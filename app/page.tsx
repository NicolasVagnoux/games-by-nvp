import Link from 'next/link';

const Home = () => {
  return (
    <div className='mx-auto max-w-125 flex flex-col justify-start items-center'>
      <h1 className=' py-12 text-center text-5xl font-semibold'>Games by NVP</h1>
      <div className='border-b border-b-black w-[80%] mb-12'></div>

      <Link
        href='/odin'
        className='w-[75%] h-36 overflow-hidden border-2 border-black rounded-xl shadow-2xl flex justify-center items-center'
      >
        <img src='./assets/odin.jpg' className='w-full h-full' alt='Odin' />
      </Link>
    </div>
  );
};

export default Home;
