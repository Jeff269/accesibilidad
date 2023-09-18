import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

const links = [
  {
    label:'Inicio',
    route:'/',
  },
  {
    label:'La Universidad',
    route:'/universidad',
  },
  {
    label:'Admisión',
    route:'/admision',
  },
]

export default function Navigation({title,...props}) {
  return (
    <header className='flex justify-center p-2 w-full border-b-2 bg-green-900 text-white'>
      <nav className='max-w-6xl w-full flex justify-between'>
        <div className='flex items-center'>
          <Image src={logo} width={100} height={50} alt='Logo de la UNCP'/>
          <h1 className='max-w-[200px] px-1'>
            UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ
          </h1>
        </div>
        <ul className='flex items-center h-full px-2'>
          {
            links.map(({label,route})=>(
              <li key={route} className='border-2 border-white-600 mx-1 p-3 min-w-[100px] text-center uppercase transition-all ease-linear hover:bg-green-600 hover:text-white'>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
