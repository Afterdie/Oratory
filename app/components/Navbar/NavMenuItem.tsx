'use client'
import { useSelectedLayoutSegment } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import { NavMenuItemProps } from './NavMenu'

export default function NavMenuItem({ name, icon, ping }: NavMenuItemProps) {
    const segment = useSelectedLayoutSegment()

    //applies a white filter to svg if on this page
    const filterStyle =
        name.toLowerCase() === segment ? 'brightness(0) invert(1)' : ''

    return (
        <li
            className={`inline rounded-[3.063rem] border-[0.125rem] p-[0.938rem] transition-all duration-300 ease-in-out ${
                name.toLowerCase() === segment
                    ? 'border-[#FCB4A5] bg-primary text-white'
                    : 'border-white bg-none'
            }`}
        >
            <Link href={`/${name.toLowerCase()}`}>
                <div className="flex flex-row items-center gap-2">
                    <div className="relative">
                        {ping && name.toLowerCase() !== segment && (
                            <div className="absolute left-[0.27rem] top-0 h-2 w-2 rounded-full bg-primary" />
                        )}
                        <Image
                            alt={name}
                            src={icon}
                            style={{ filter: filterStyle }}
                        />
                    </div>
                    <h1
                        className={`${
                            name.toLowerCase() === segment
                                ? 'text-white'
                                : 'text-[#B0B0B0]'
                        } font-medium`}
                    >
                        {name}
                    </h1>
                </div>
            </Link>
        </li>
    )
}
