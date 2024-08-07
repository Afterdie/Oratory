import type { Metadata } from 'next'
import './globals.css'

import localFont from 'next/font/local'

import Navbar from './components/Navbar/Navbar'
import NavMenu from './components/Navbar/NavMenu'

const gensan = localFont({
    src: [
        {
            path: '../public/fonts/GeneralSans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/GeneralSans-Semibold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/GeneralSans-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-gensan',
})

export const metadata: Metadata = {
    title: 'Afterdie',
    description: 'Oratory Platform',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${gensan.variable} h-screen bg-white font-sans`}>
                <Navbar />
                <div className="relative top-[6.813rem] h-full">{children}</div>
                <NavMenu />
            </body>
        </html>
    )
}
