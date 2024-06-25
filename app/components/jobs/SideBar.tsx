'use client'
import React, { useState } from 'react'

import Image from 'next/image'

import ApplicantsIcon from '../../../public/icons/sidebar/applicants.svg'
import MatchesIcon from '../../../public/icons/sidebar/matches.svg'
import MessagesIcon from '../../../public/icons/sidebar/messages.svg'
import ViewsIcon from '../../../public/icons/sidebar/views.svg'
import Link from 'next/link'

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
                <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 2.5H13M3 5H18M16.3333 5L15.7489 13.7661C15.6612 15.0813 15.6174 15.7389 15.3333 16.2375C15.0833 16.6765 14.706 17.0294 14.2514 17.2497C13.735 17.5 13.0759 17.5 11.7578 17.5H9.24221C7.92409 17.5 7.26503 17.5 6.74861 17.2497C6.29396 17.0294 5.91674 16.6765 5.66665 16.2375C5.38259 15.7389 5.33875 15.0813 5.25107 13.7661L4.66667 5M8.83333 8.75V12.9167M12.1667 8.75V12.9167"
                        stroke="#DC4A2D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <p className="text-[1rem] font-medium text-primary">
                    Delete job
                </p>
            </button>
            <button className="flex h-[3.125rem] w-[10.75rem] items-center justify-center gap-[0.0.625rem] rounded-[0.5rem] border-[0.125rem] border-[#FED3CA] bg-primary transition-colors duration-300 ease-in-out hover:bg-primary/75">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_1_9150)">
                        <path
                            d="M12 6.66668L9.33331 4.00001M1.66663 14.3333L3.92287 14.0826C4.19853 14.052 4.33636 14.0367 4.46519 13.995C4.57949 13.958 4.68826 13.9057 4.78855 13.8396C4.9016 13.765 4.99966 13.667 5.19578 13.4709L14 4.66668C14.7364 3.9303 14.7364 2.73639 14 2.00001C13.2636 1.26363 12.0697 1.26363 11.3333 2.00001L2.52911 10.8042C2.33299 11.0003 2.23493 11.0984 2.16038 11.2114C2.09425 11.3117 2.04197 11.4205 2.00497 11.5348C1.96326 11.6636 1.94795 11.8014 1.91732 12.0771L1.66663 14.3333Z"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_9150">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p className="text-white">Edit job</p>
            </button>
        </div>
    )
}
