'use client';
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/home', icon: HomeIcon },
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
          return (
            <Link
              href={link.href}
              key={link.name}
              className={
                clsx(
                  'flex flex-col w-full md:justify-center md:p-3.5 gap-1.5 items-center',
                  { ' text-black ': pathname === link.href },
                )}
            >

              <nav
                title={link.name}
                aria-label={link.name}
                className='md:w-10 md:h-10 w-10 h-10 flex flex-col justify-center align-middle items-center '
              >
                <LinkIcon className={
                  clsx(
                    'hover:-translate-y-0.5',
                    { 'transition delay-500 linear -translate-y-2.5': pathname === link.href }
                  )
                }></LinkIcon>

                <div className={
                  clsx(
                    'w-1 h-0.5 ',
                    { 'transition-transform delay-700 h-0.5 duration-1000 linear bg-gray-700 -translate-y-2 mt-0.5 scale-x-450': pathname == link.href }
                  )}></div>

              </nav>
            </Link>
          )

        })
      }
    </>
  )
};