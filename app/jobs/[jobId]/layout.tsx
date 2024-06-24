import JobNavMenu from '../../components/jobs/JobNavMenu'
import SideBar from '../../components/jobs/SideBar'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex h-full flex-col">
            <JobNavMenu />
            {/* added row-reverse so tab navigation makes sense/ accessibility stuff */}
            <div className="flex flex-1 flex-row-reverse justify-between">
                <SideBar />
                {children}
            </div>
        </div>
    )
}
