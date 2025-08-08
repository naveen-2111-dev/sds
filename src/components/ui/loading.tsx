import { LoaderCircle } from 'lucide-react'
import React from 'react'

const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen animate-spin">
            <LoaderCircle size={40} />
        </div>
    )
}

export default Loading
