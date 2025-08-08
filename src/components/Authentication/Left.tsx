import { SiteConfigQuery } from '@/graphql/generated/graphql'
import { MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Left = ({ data }: { data: SiteConfigQuery }) => {
    return (
        <div className='flex flex-col items-center'>
            <Image src={`https://billing-w07d.onrender.com/media/${data?.core?.siteConfig?.siteLogo}`} alt="Logo" width={150} height={150} />
            <h1 className="text-4xl font-bold text-color">{data?.core?.siteConfig?.siteName}</h1>
            <p className="flex items-center">
                <MapPin className="mr-2" size={16} />
                {data?.core?.siteConfig?.address}
            </p>
            <p className="flex items-center">
                <Phone className="mr-2" size={16} />
                {data?.core?.siteConfig?.phone1}, {data?.core?.siteConfig?.phone2}
            </p>
        </div>
    )
}

export default Left;
