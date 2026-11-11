export const games = [
    {
      name: 'ODIN',
      url: '/odin',
      color: 'bg-mint',
      deco: (
        <>
          <div className='absolute w-28 h-28 -top-8 -right-6 rounded-full bg-blue border-3 border-dark'></div>
          <div className='absolute w-20 h-20 -bottom-8 -left-4 rotate-25 rounded-xl bg-sun border-3 border-dark'></div>
        </>
      ),
    },
    {
      name: 'Flip 7',
      url: '/flip7',
      color: 'bg-sun',
      deco: (
        <>
          <div className='absolute z-3 w-14 h-20 top-[45%] left-[50%] translate-[-50%] rounded-xl bg-mint border-3 border-dark'></div>
          <div className='absolute z-2 w-14 h-20 top-[48%] left-[40%] translate-[-50%] -rotate-15 rounded-xl bg-blue border-3 border-dark'></div>
          <div className='absolute z-1 w-14 h-20 top-[57%] left-[30%] translate-[-50%] -rotate-30 rounded-xl bg-coral border-3 border-dark'></div>
          <div className='absolute z-4 w-14 h-20 top-[48%] left-[60%] translate-[-50%] rotate-15 rounded-xl bg-purple border-3 border-dark'></div>
          <div className='absolute z-5 w-14 h-20 top-[57%] left-[70%] translate-[-50%] rotate-30 rounded-xl bg-pink border-3 border-dark'></div>
        </>
      )
    },
  ];