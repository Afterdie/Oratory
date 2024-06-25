'use client'
import React from 'react'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function JobNavMenuItems(props: { name: string }) {
    const segment = useSelectedLayoutSegment()

    //processing the name to prevent passing more takes the second word if it exists or else the first
    const routeName = (
        props.name.split(' ')[1]
            ? props.name.split(' ')[1]
            : props.name.split(' ')[0]
    ).toLowerCase()
    return (
        <li>
            <Link href={routeName}>
                <div className="relative py-[1.12rem]">
                    <h1
                        className={`text-[1.25rem] ${segment === routeName ? 'font-semibold text-primary' : 'font-medium text-[#888888]'}`}
                    >
                        {props.name}
                    </h1>
                    <div className="flex justify-center">
                        <div
                            className={`absolute bottom-0 h-[0.125rem] transition-all duration-300 ease-in-out ${segment === routeName ? 'w-[55%]' : 'w-0'} bg-primary`}
                        />
                    </div>
                </div>
            </Link>
        </li>
    )
}
