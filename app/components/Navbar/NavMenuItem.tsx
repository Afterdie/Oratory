'use client'
import { useSelectedLayoutSegment } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import { NavMenuItemProps } from './NavMenu'

export default function NavMenuItem({
    name,
    icon,
    route,
    ping,
}: NavMenuItemProps) {
    const segment = useSelectedLayoutSegment()

    //applies a white filter to svg if on this page
    const filterStyle =
        name.toLowerCase() === segment ? 'brightness(0) invert(1)' : ''

    return (
        <li
            className={`inline rounded-[3.063rem] border-[0.125rem] px-[0.835rem] py-[0.722rem] transition-all duration-300 ease-in-out ${
                name.toLowerCase() === segment
                    ? 'border-[#FCB4A5] bg-primary text-white'
                    : 'border-white bg-none'
            }`}
        >
            <Link href={route}>
                <div className="flex flex-row items-center gap-2">
                    <div className="relative">
                        {ping && name.toLowerCase() !== segment && (
                            <div className="absolute -right-[0.08rem] top-0 h-[0.375rem] w-[0.375rem] rounded-full bg-primary" />
                        )}
                        <Image
                            alt={name}
                            src={icon}
                            style={{ filter: filterStyle }}
                        />
                    </div>
                    <h1
                        className={`text-[1.25rem] ${
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
