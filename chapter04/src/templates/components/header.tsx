'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { title: 'Home', href: '/' },
  { title: 'Blue', href: '/blue' },
  { title: 'Red', href: '/red' },
  { title: 'Work01', href: '/work01' },
  { title: 'Work02', href: '/work02' },
  { title: 'Work03', href: '/work03' },
  { title: 'Work04', href: '/work04' },
  { title: 'Work05', href: '/work05' },
  { title: 'Work06', href: '/work06' },
  { title: 'Work07', href: '/work07' },
];

export const Header = function () {
  const pathName = usePathname();

  return (
    <div className="main p-4 bg-blue-300">
      <h1 className="p-2 text-2xl">NextJSアプリ</h1>
      <div className="flex justify-around flex-wrap p-2">
        {links.map((e, i) => (
          <Link
            key={i}
            href={e.href}
            className={
              pathName === e.href
                ? 'text-red-600 hover:text-red-600'
                : 'text-blue-600 underline hover:text-red-600'
            }
          >
            {e.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
