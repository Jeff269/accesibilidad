import React from 'react';
import Talker from '@/components/Talker';
import Image from 'next/image';

export const Tarjeta = ({ texto, componentStyle, children, degraded, border }) => {
  return (
    <>
      <div className={`w-[200px] min-h-[150px] border rounded-2xl border-black flex flex-col justify-center items-center transition-all ${componentStyle}`}>
        <p className='text-xl'>
          {children}
        </p>
        <div className={`group w-[180px] min-h-[60px] border-[1px] rounded-md flex justify-end items-center transition-all ${degraded}`}>
          <p className='text-l font-serif text-center group-hover:text-white'>
            {texto}
          </p>
        </div>
      </div>
    </>
  );
};




