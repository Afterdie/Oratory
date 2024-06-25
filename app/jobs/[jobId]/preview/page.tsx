import React from 'react'

import Image from 'next/image'

import FigmaIcon from '../../../../public/icons/jobDetails/figma.png'
import IllustratorIcon from '../../../../public/icons/jobDetails/illustrator.png'
import XDIcon from '../../../../public/icons/jobDetails/xd.png'
import LocationIcon from '../../../../public/icons/jobDetails/location.svg'
import StackIcon from '../../../../public/icons/jobDetails/stack.svg'

import Logo from '../../../../public/icons/Logo.png'

import Link from 'next/link'

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
    company: {
        icon: Logo,
        name: 'Atlassian',
        details: {
            sizeRange: ['1k', '2k'],
            sector: 'Information Technology, Infrastructure',
            foundedDate: 2019,
            type: 'Private',
            funding: 'Bootstrapped',
            founder: [
                {
                    name: 'Scott Farquhar,',
                    link: 'https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw',
                },
                {
                    name: 'Mike Cannon-Brookes',
                    link: 'https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw',
                },
            ],
        },
    },
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
            <Company />
        </div>
    )
}

function Title() {
    const title = jobDetails.title
    return (
        <div className="mx-[1rem] flex flex-col gap-[1.2rem] pb-[1.9rem] pt-[2.15rem] lg:mx-[6.25rem]">
            <div className="flex flex-col items-start gap-[0.75rem] lg:flex-row lg:items-center">
                <h1 className="text-[2.188rem] font-semibold text-[#3D3D3D]">
                    {title.position}
                </h1>
                <div className="hidden h-[0.25rem] w-[0.25rem] rounded-full bg-[#D1D1D1] lg:block" />
                <div className="flex flex-row gap-[0.75rem]">
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
            </div>
            <div className="flex items-center gap-[1rem]">
                <div className="flex flex-row items-center gap-[0.5rem]">
                    <Image src={LocationIcon} alt="location" />
                    <h2 className="text-[1.25rem] text-[#5D5D5D]">
                        {title.location}
                    </h2>
                </div>
                <div className="h-[0.25rem] w-[0.25rem] rounded-full bg-[#D1D1D1]" />
                <div className="flex flex-row items-center gap-[0.75rem]">
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
        <div className="mx-[1rem] grid max-w-[54.5rem] grid-cols-2 gap-[4rem] py-[2rem] lg:mx-[6.25rem] lg:grid-cols-4">
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
                                className="flex gap-[0.188rem] self-start rounded-[0.375rem] border-[0.063rem] border-[#D0D5DD] px-[0.347rem] py-[0.125rem]"
                            >
                                <Image alt={item.name} src={item.icon} />
                                <p className="truncate text-[0.75rem] text-[#344054]">
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
                <h2 className="text-[0.977rem] font-semibold text-[#3D3D3D]">
                    {requirements.yoe}+ Years of Experience
                </h2>
            </div>
        </div>
    )
}

function Description() {
    const desc = jobDetails.description
    return (
        <div className="mx-[1rem] flex flex-col pb-[2.65rem] pt-[2rem] lg:mx-[6.25rem]">
            <h2 className="text-[0.875rem] text-[#6E6D6D]">About the job</h2>
            <ul className="mt-[0.5rem] list-inside list-decimal leading-[1.75rem]">
                {desc.about.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <div className="leading-[1.75rem]">
                <span>Benefits:</span>
                <ul className="list-inside list-disc px-[0.5rem]">
                    {desc.benefits.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
            <div className="leading-[1.75rem]">
                <span>Schedule:</span>
                <ul className="list-inside list-disc px-[0.5rem]">
                    {desc.schedule.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
            <div className="leading-[1.75rem]">
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

function Company() {
    const company = jobDetails.company
    return (
        <div className="mx-[1rem] flex flex-col gap-[1rem] pb-[2rem] pt-[2.25rem] lg:mx-[6.25rem]">
            <div className="flex items-center gap-[0.625rem] py-[0.625rem]">
                <Image src={company.icon} alt={company.name} />
                <h2 className="text-[1.25rem] text-[#4F4F4F]">
                    {company.name}
                </h2>
            </div>
            <div className="grid max-w-[46rem] grid-flow-col grid-cols-2 grid-rows-3 gap-x-[3rem] gap-y-[1.25rem]">
                <div className="col-start-1 flex flex-col gap-[0.5rem]">
                    <h3 className="text-[0.875rem] text-[#6E6D6D]">
                        Company size
                    </h3>
                    <h2 className="text-[#3D3D3D]">
                        {company.details.sizeRange[0]} -{' '}
                        {company.details.sizeRange[1]} Employees
                    </h2>
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                    <h3 className="text-[0.875rem] text-[#6E6D6D]">Sector</h3>
                    <h2 className="text-[#3D3D3D]">{company.details.sector}</h2>
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                    <h3 className="text-[0.875rem] text-[#6E6D6D]">
                        Founded In
                    </h3>
                    <h2 className="text-[#3D3D3D]">
                        {company.details.foundedDate}
                    </h2>
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                    <h3 className="text-[0.875rem] text-[#6E6D6D]">Type</h3>
                    <h2 className="text-[#3D3D3D]">{company.details.type}</h2>
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                    <h3 className="text-[0.875rem] text-[#6E6D6D]">Funding</h3>
                    <h2 className="text-[#3D3D3D]">
                        {company.details.funding}
                    </h2>
                </div>
                <div className="flex flex-col gap-[0.5rem]">
                    <h3 className="text-[0.875rem] text-[#6E6D6D]">
                        Founded By
                    </h3>
                    <div className="text-[#3D3D3D]">
                        {company.details.founder.map((item, index) => {
                            return (
                                <Link href={item.link} key={index}>
                                    {item.name}{' '}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
