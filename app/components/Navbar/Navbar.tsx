import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

//icon imports**
import Chevron_Down from '../../../public/icons/chevronDown.svg'
import Bell from '../../../public/icons/navbar/bell.svg'
import Avatar from '../../../public/icons/navbar/avatar.png'

//component imports**
import Dropdown from './Dropdown'
import NavMenu from './NavMenu'

export default function Navbar() {
    return (
        <nav className="fixed z-50 flex h-[6.25rem] w-full items-center bg-white drop-shadow-[0_4px_4px_rgba(217,217,217,0.1)]">
            <div className="mx-auto flex w-full max-w-[104rem] items-center justify-between">
                <Logo />
                <NavMenu />
                <Profile />
            </div>
        </nav>
    )
}

function Logo() {
    return (
        <div className="flex h-[61px] w-[100px] items-center justify-center bg-accent text-primary">
            {/* uses satoshi variable font here */}
            <h1 className="font-bold">Logo</h1>
        </div>
    )
}

function Profile() {
    return (
        <div className="flex items-center gap-4 p-[0.625rem]">
            <div className="relative">
                <Image src={Bell} alt="unread_notifications" />
                {/* create a component that hides the notif if time permits */}
                <div className="absolute right-[1px] top-0 h-2 w-2 rounded-full bg-primary" />
            </div>

            <div className="flex gap-[0.375rem]">
                <Link href={'/account'}>
                    <Image src={Avatar} alt="profile picture" />
                </Link>
                <Dropdown />
            </div>
        </div>
    )
}
