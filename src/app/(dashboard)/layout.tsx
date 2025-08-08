import React, { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
    )
}

export default DashboardLayout;