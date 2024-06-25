import React from 'react'

import JobNavMenuItems from './JobNavMenuItems'

const menuItems = ['Job preview', 'Applicants', 'Match', 'Messages']

export default function JobNavMenu() {
    return (
        <div className="box-border border-[0.063rem] border-accent bg-white">
            <nav className="mx-[6.25rem] hidden md:block">
                <ul className="flex gap-[4.5rem]">
                    {menuItems.map((name, index) => {
                        return <JobNavMenuItems name={name} key={index} />
                    })}
                </ul>
            </nav>
        </div>
    )
}
