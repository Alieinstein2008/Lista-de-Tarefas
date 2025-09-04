'use client';
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname} from 'next/navigation';
import clsx from 'clsx';

const links = [
  {name:'Home', href:'/home', icon:HomeIcon},
  { name: 'Calendar', href: '/home/calendar', icon: CalendarIcon },
  { name: 'User', href: '/home/user', icon: UserIcon },
  { name: 'Config', href: '/home/configuration', icon: Cog6ToothIcon },

];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {
        links.map((link) => {
          const LinkIcon = link.icon;
          return(
            <Link
              href={link.href}
              key={link.name}
              className={clsx(
                'flex w-full md:justify-center md:p-3.5  hover:bg-gray-100',
                {'bg-gray-200 text-blue-600 ': pathname === link.href,},

              )}
            >
              <p 
              title={link.name} 
              aria-label={link.name}
              className='md:w-8 md:h-8 w-8 h-8 '
              >
                <LinkIcon></LinkIcon>

              </p>
    
            </Link>
          )

        })
      }
    </>
  )};