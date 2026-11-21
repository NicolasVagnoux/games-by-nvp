import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children, className }: SectionProps) => {

  const baseClass = 'fixed -z-1 border-3 border-dark opacity-75';

  return (
    <>
      <div className={`relative mx-auto max-w-125 pb-8 flex flex-col justify-start items-center ${className ?? ''}`}>
        {children}
      </div>
      <div className={`${baseClass} w-26 h-36 bottom-[25%] -left-10 -rotate-15 rounded-xl bg-coral`}></div>
      <div className={`${baseClass} w-26 h-36 bottom-[-5%] left-20 -rotate-5 rounded-xl bg-mint`}></div>
      <div className={`${baseClass} w-26 h-36 bottom-[3%] -right-10 rotate-15 rounded-xl bg-purple`}></div>
      <div className={`${baseClass} w-26 h-36 top-[10%] -right-10 rotate-15 rounded-xl bg-sun`}></div>
      <div className={`${baseClass} w-6 h-6 top-[20%] left-12 rotate-15 rounded-md bg-blue`}></div>
      <div className={`${baseClass} w-6 h-6 top-[4%] right-20 rotate-15 rounded-md bg-coral`}></div>
    </>
  );
};

export default Layout;
