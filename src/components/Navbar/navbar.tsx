import React from 'react'
import { NavbarProps } from './_types/navbar'

const Navbar = ({ title, other }: NavbarProps) => {
    return (
        <nav className='flex items-center justify-between mb-6'>
            <h1 className="text-2xl font-bold text-color">{title}</h1>
            <div className='flex items-center gap-4'>
                {other}
            </div>
        </nav>
    )
}

export default Navbar
