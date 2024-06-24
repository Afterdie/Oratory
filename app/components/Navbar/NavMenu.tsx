import React from 'react'

//icon imports**
import BriefCase from '../../../public/icons/navbar/briefcase.svg'
import Message from '../../../public/icons/navbar/message.svg'
import Payments from '../../../public/icons/navbar/coinsHand.svg'

import NavMenuItem from './NavMenuItem'

//change icons to svg code if time permits
const menuItems = [
    {
        icon: BriefCase,
        name: 'Jobs',
        route: '/jobs/preview',
        ping: false,
    },
    {
        icon: Message,
        name: 'Messages',
        route: '/messages/',
        ping: true,
    },
    {
        icon: Payments,
        name: 'Payments',
        route: '/payments/',
        ping: false,
    },
]

//add correct image type
export type NavMenuItemProps = {
    name: string
    icon: any
    route: string
    ping: boolean
}

export default function NavMenu() {
    return (
        <nav className="rounded-[2.25rem] border-[0.031rem] border-[#D1D1D1] p-2">
            <ul className="flex gap-[3.125rem]">
                {menuItems.map((item, index) => {
                    return <NavMenuItem {...item} key={index} />
                })}
            </ul>
        </nav>
    )
}
