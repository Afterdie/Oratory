import React from 'react'

import Image from 'next/image'

import FigmaIcon from '../../../../public/icons/jobDetails/figma.png'
import IllustratorIcon from '../../../../public/icons/jobDetails/illustrator.png'
import XDIcon from '../../../../public/icons/jobDetails/xd.png'
import LocationIcon from '../../../../public/icons/jobDetails/location.svg'
import StackIcon from '../../../../public/icons/jobDetails/stack.svg'

const jobDetails = {
    title: {
        position: 'Senior Product Designer',
        time: '2 days',
        open: true,
        location: 'Delaware, USA',
        salaryRange: ['$300k', '$400k'],
    },
    requirements: {
        skills: [
            {
                name: 'Figma',
                icon: FigmaIcon,
            },
            {
                name: 'Adobe Illustrator',
                icon: IllustratorIcon,
            },
            {
                name: 'Adobe XD',
                icon: XDIcon,
            },
        ],
        language: ['English'],
        type: 'Full time',
        yoe: '3',
    },
    description: {
        about: [
            'Handle the UI/UX research design',
            'Work on researching on latest web applications designs & trends',
            'Work on conceptualizing and visualizing',
            'Work on creating graphics content and other graphic related works',
        ],
        benefits: ['Health Insurance', 'Provident Fund'],
        schedule: ['Day Shift'],
        payTypes: ['Performance bonus', 'Yearly bonus'],
        location: 'In person',
    },
    company: {},
}

export default function page() {
    return (
        <div className="w-full border-[0.063rem] border-accent">
            <Title />
            <hr />
            <Skills />
            <hr />
            <Description />
            <hr />
        </div>
    )
}

function Title() {
    const title = jobDetails.title
    return (
        <div className="mx-[6.25rem] flex flex-col gap-[1.5rem] pb-[2rem] pt-[2.25rem]">
            <div className="flex items-center gap-[0.75rem]">
                <h1 className="text-[2.188rem] font-semibold text-[#3D3D3D]">
                    {title.position}
                </h1>
                <div className="h-[0.25rem] w-[0.25rem] rounded-full bg-[#D1D1D1]" />
                <p className="text-[0.875rem] font-medium text-[#888888]">
                    posted {title.time} ago
                </p>
                <div className="flex items-center gap-[0.1rem] rounded-full border-[0.063rem] border-[#ABEFC6] bg-[#ECFDF3] py-[0.125rem] pl-[0.375rem] pr-[0.5rem]">
                    <div className="m-[0.125rem] h-[0.375rem] w-[0.375rem] rounded-full bg-[#17B26A]" />
                    <span className="font-inter text-[0.75rem] text-[#067647]">
                        {title.open ? 'Open' : 'Closed'}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-[1rem]">
                <div className="flex flex-row items-center gap-[0.5rem]">
                    <Image src={LocationIcon} alt="location" />
                    <h2 className="text-[1.25rem] text-[#5D5D5D]">
                        {title.location}
                    </h2>
                </div>
                <div className="h-[0.25rem] w-[0.25rem] rounded-full bg-[#D1D1D1]" />
                <div className="flex flex-row items-center gap-[0.5rem]">
                    <Image src={StackIcon} alt="salary" />
                    <h2 className="text-[1.25rem] text-[#5D5D5D]">
                        {title.salaryRange[0]}-{title.salaryRange[1]}
                    </h2>
                </div>
            </div>
        </div>
    )
}

function Skills() {
    const requirements = jobDetails.requirements
    return (
        <div className="mx-[6.25rem] flex gap-[4rem] py-[2rem]">
            {/* skills required */}
            <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-[0.875rem] text-[#6E6D6D]">
                    Skills Required
                </h3>
                <ul className="flex flex-col gap-[0.5rem]">
                    {requirements.skills.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex gap-[0.188rem] self-start rounded-[0.375rem] border-[0.063rem] border-[#D0D5DD] px-[0.375rem] py-[0.25rem]"
                            >
                                <Image alt={item.name} src={item.icon} />
                                <p className="text-[0.75rem] text-[#344054]">
                                    {item.name}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* preferred language */}
            <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-[0.875rem] text-[#6E6D6D]">
                    Preferred Language
                </h3>
                {requirements.language.map((item, index) => {
                    return (
                        <h2
                            key={index}
                            className="text-[1rem] font-semibold text-[#3D3D3D]"
                        >
                            {item}
                        </h2>
                    )
                })}
            </div>

            {/* employment type */}
            <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-[0.875rem] text-[#6E6D6D]">Type</h3>
                <h2 className="text-[1rem] font-semibold text-[#3D3D3D]">
                    {requirements.type}
                </h2>
            </div>

            {/* yoe */}
            <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-[0.875rem] text-[#6E6D6D]">
                    Years of Experience
                </h3>
                <h2 className="text-[1rem] font-semibold text-[#3D3D3D]">
                    {requirements.yoe}+ Years of Experience
                </h2>
            </div>
        </div>
    )
}

function Description() {
    const desc = jobDetails.description
    return (
        <div className="mx-[6.25rem] flex flex-col gap-[0.5rem] pb-[2.25rem] pt-[2rem]">
            <h2 className="text-[0.875rem] text-[#6E6D6D]">About the job</h2>
            <ul className="list-inside list-decimal">
                {desc.about.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <div>
                <span>Benefits:</span>
                <ul className="list-inside list-disc px-[0.5rem]">
                    {desc.benefits.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
            <div>
                <span>Schedule:</span>
                <ul className="list-inside list-disc px-[0.5rem]">
                    {desc.schedule.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
            <div>
                <span>Supplemental pay types:</span>
                <ul className="list-inside list-disc px-[0.5rem]">
                    {desc.payTypes.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
            <h2>Work Location: {desc.location}</h2>
        </div>
    )
}
