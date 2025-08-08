import React from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { AddDriverFormProps } from '../_types'

const AddDriverForm = ({ setState }: AddDriverFormProps) => {
    return (
        <div className='mb-3'>
            <Label htmlFor="drivername">Driver Name <span className='text-red-500'>*</span></Label>
            <Input id="drivername" title='Driver Name' type='text' className='border border-gray-400 mb-3' />

            <Label htmlFor="phonenumber">Phone Number</Label>
            <Input id="phonenumber" title='Phone Number' type='text' className='border border-gray-400' />
        </div>
    )
}

export default AddDriverForm
