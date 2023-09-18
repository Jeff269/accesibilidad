import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Talker from './Talker'

export const SubSection = ({subtitle,resume,children}) => {
  return (
    <>
      <Talker>
        <h2 className='text-2xl font-semibold border-b-4'>
          {subtitle}
        </h2>
      </Talker>
      <Talker>
        <p className='text-gray-900 pl-2 text-base my-1 flex'>
          <ChevronRightIcon className='w-4'/>
          {resume}
        </p>
      </Talker>
      <div className='pl-6'>
        {children}
      </div>
    </>
  )
}