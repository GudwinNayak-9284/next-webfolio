import { NavIconProps } from '@/types'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'



const NavIcon = ({href,icon,title,label}:NavIconProps) => {
  return (
    <Link href={href} className={clsx('flex items-center justify-center rounded-xl hover:bg-slate-300/50','dark:hover:bg-slate-800/50',
        [
            label && ['text-slate-800','sm:bg-slate-300/50 sm:pr-3 sm:pl-1 sm:hover:bg-slate-300/70',
                'dark:text-slate-100 sm:dark:bg-slate-800/50 sm:dark:hover:bg-slate-700/50']
        ]
    )} aria-label={
        `My ${title}`
    } title={`My ${title} profile`} target='_blank' rel='noreferrer nofollow'>
        <span className={clsx('flex h-9 w-9 items-center justify-center rounded-xl')}>
            {icon}
        </span>

    </Link>
  )
}

export default NavIcon