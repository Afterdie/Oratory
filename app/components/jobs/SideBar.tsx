'use client'
import React, { useState } from 'react'

import Image from 'next/image'

import ApplicantsIcon from '../../../public/icons/sidebar/applicants.svg'
import MatchesIcon from '../../../public/icons/sidebar/matches.svg'
import MessagesIcon from '../../../public/icons/sidebar/messages.svg'
import ViewsIcon from '../../../public/icons/sidebar/views.svg'
import DeleteIcon from '../../../public/icons/sidebar/delete.svg'
import EditIcon from '../../../public/icons/sidebar/edit.svg'

import JobNavMenuItems from './JobNavMenuItems'

const listItems = [
    {
        icon: ApplicantsIcon,
        name: 'Applicants',
        count: 400,
    },
    {
        icon: MatchesIcon,
        name: 'Matches',
        count: 100,
    },
    {
        icon: MessagesIcon,
        name: 'Messages',
        count: 147,
    },
    {
        icon: ViewsIcon,
        name: 'Views',
        count: 800,
    },
]

//for mobile devices navbars shows here
const menuItems = ['Job preview', 'Applicants', 'Match', 'Messages']

export default function SideBar() {
    const [show, setShow] = useState(false)

    return (
        <div className="relative border-l-[0.063rem] border-t-[0.063rem] border-accent bg-[#FCFCFC] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <button
                className="absolute right-0 top-10 block rounded-l-xl bg-primary p-4 text-white md:hidden"
                onClick={() => setShow(!show)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    stroke="white"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                </svg>
            </button>

            {/* response jobmenu navbar */}
            <nav className="hidden">
                <ul className="flex flex-col gap-2 p-[1.535rem]">
                    {menuItems.map((name, index) => {
                        return <JobNavMenuItems key={index} name={name} />
                    })}
                </ul>
            </nav>
            <hr />
            <aside className="hidden h-full md:block">
                <div className="flex flex-col gap-[1.5rem] px-[1.535rem] py-[2rem]">
                    <Buttons />
                    <List />
                </div>
            </aside>
        </div>
    )
}

function List() {
    return (
        <ul className="xl:px-[0.75rem]">
            {listItems.map((item, index) => {
                return (
                    <li
                        className={`flex items-center justify-between ${index === listItems.length - 1 ? 'border-none' : 'border-b-[1px] border-accent'} ${index === 0 ? 'pb-[1rem] pt-[0.75rem]' : 'py-[1rem]'}`}
                        key={index}
                    >
                        <div className="flex items-center justify-start gap-[0.625rem] px-[0.625rem] py-[0.565rem]">
                            <Image
                                src={item.icon}
                                alt={item.name}
                                className="hidden xl:block"
                            />
                            <p className="font-medium text-[#4F4F4F]">
                                {item.name}
                            </p>
                        </div>
                        <div className="px-[0.645rem] py-[0.285rem] text-[1.25rem] font-semibold">
                            {item.count}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
function Buttons() {
    return (
        <div className="flex flex-col items-center justify-between gap-[1rem] xl:flex-row">
            {/* //dimensions have been set explicitly here */}
            <button className="flex h-[2.975rem] w-[10.75rem] items-center justify-center gap-[0.0.625rem] rounded-[0.5rem] border-[0.05rem] border-primary bg-[#FEF4F2] text-white transition-colors duration-300 ease-in-out hover:bg-primary/20">
                <Image src={DeleteIcon} alt="delete" />

                <p className="text-[1rem] font-medium text-primary">
                    Delete job
                </p>
            </button>
            <button className="flex h-[3.125rem] w-[10.75rem] items-center justify-center gap-[0.0.625rem] rounded-[0.5rem] border-[0.125rem] border-[#FED3CA] bg-primary transition-colors duration-300 ease-in-out hover:bg-primary/75">
                <Image src={EditIcon} alt="edit" />
                <p className="text-white">Edit job</p>
            </button>
        </div>
    )
}
