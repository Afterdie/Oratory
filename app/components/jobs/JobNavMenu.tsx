import React from 'react'

import JobNavMenuItems from './JobNavMenuItems'

const menuItems = ['Job Preview', 'Applicants', 'Match', 'Messages']

export default function JobNavMenu() {
    return (
        <div className="box-border border-[0.063rem] border-accent bg-white">
            <nav className="mx-auto w-full max-w-[96rem] px-[0.25rem]">
                <ul className="flex gap-[4.5rem]">
                    {menuItems.map((name, index) => {
                        return <JobNavMenuItems name={name} key={index} />
                    })}
                </ul>
            </nav>
        </div>
    )
}
