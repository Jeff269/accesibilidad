import React from 'react'
import {ChevronRightIcon} from '@heroicons/react/24/solid'
import Talker from '@/components/Talker'

export const Article = ({title,resume,width,children}) => {
  return (
    <article className={`p-4 break-words ${width}`}>
      <Talker>
        <h1 className='uppercase font-bold text-4xl text-gray-950 border-b-4 my-2'>
          {title}
        </h1>
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
    </article>
  )
}