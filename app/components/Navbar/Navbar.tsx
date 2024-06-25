import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

//icon imports**
import Chevron_Down from '../../../public/icons/chevronDown.svg'
import Bell from '../../../public/icons/navbar/bell.svg'
import Avatar from '../../../public/icons/navbar/avatar.png'
import Logo from '../../../public/icons/Logo.png'

//component imports**
import Dropdown from './Dropdown'

export default function Navbar() {
    return (
        <nav className="fixed z-50 flex h-[6.813rem] w-full justify-center bg-white drop-shadow-[0_4px_4px_rgba(217,217,217,0.1)]">
            <div className="box-content flex w-full max-w-[104rem] items-center justify-between pl-[1rem]">
                <Image src={Logo} alt="logo" />
                <Profile />
            </div>
        </nav>
    )
}

function Profile() {
    return (
        <div className="flex items-center gap-4 p-[0.625rem]">
            <div className="relative">
                <Image src={Bell} alt="unread_notifications" />
                {/* create a component that hides the notif if time permits */}
                <div className="absolute right-[3px] top-0 h-[0.375rem] w-[0.375rem] rounded-full bg-primary" />
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
