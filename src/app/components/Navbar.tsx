'use client';

import React          from 'react'                    ;
import Link           from 'next/link'                ;
import {usePathname}  from 'next/navigation'          ;
import { useSession, signIn, signOut } from 'next-auth/react';

import HomeFillIcon   from './ui/icons/HomeFillIcon'  ;
import HomeIcon       from './ui/icons/HomeIcon'      ;
import NewFillIcon    from './ui/icons/NewFillIcon'   ;
import NewIcon        from './ui/icons/NewIcon'       ;
import SearchFillIcon from './ui/icons/SearchFillIcon';
import SearchIcon     from './ui/icons/SearchIcon'    ;
import ColorButton    from './ui/ColorButton'         ;

const menu = [
  {
    href       : '/'             ,
    icon       : <HomeIcon />    ,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href       : '/search'         ,
    icon       : <SearchIcon />    ,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href       : '/new'         ,
    icon       : <NewIcon />    ,
    clickedIcon: <NewFillIcon />,
  },
];


export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();

  return (
    <div className='flex justify-between items-center px-4'>
      <Link href='/'>
      <h1 className='text-3xl font-bold'>instagram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {menu.map((menuItem) => (
            <li key={menuItem.href}>
              <Link href={menuItem.href}>
                {pathName == menuItem.href ? menuItem.clickedIcon : menuItem.icon}
              </Link>
            </li>
          ))}
          {session ? (<ColorButton text='Sign out' onClick={() => signOut()} />) 
                   : (<ColorButton text='Sign in' onClick={() => signIn()} />  )
          }
        </ul>
      </nav>
    </div>
  );
}