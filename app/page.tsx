import React from 'react'

import { redirect } from 'next/navigation'

export default function Home() {
    redirect('/jobs/123/preview')
    return <div>Redirecting</div>
}
