'use client'

import React, { useState } from 'react'

import Image from 'next/image'

import ChevronDown from '../../../public/icons/navbar/chevronDown.svg'

export default function Dropdown() {
    const [clicked, setClicked] = useState(false)
    return (
        <>
            <button onClick={() => setClicked(!clicked)}>
                <Image
                    src={ChevronDown}
                    className={`transition-transform duration-300 ease-in-out ${
                        clicked ? 'rotate-180' : 'rotate-0'
                    }`}
                    alt="dropdown"
                />
            </button>
            <div className={`${clicked ? 'flex' : 'hidden'} absolute`}>
                {/* dropdown menu*/}
            </div>
        </>
    )
}
