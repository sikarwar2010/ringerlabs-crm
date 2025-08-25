import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <UserButton />
        </div>
    )
}

export default DashboardPage
