
'use client'

import Image from 'next/image';
import avatar from '@/public/staringmaskedhill.svg'
import {useRouter} from "next/navigation";


export const PrimaryButton = ({children, className, type}: Readonly<{children: React.ReactNode, className?: string, type?: 'button' | 'submit' | 'reset'}>) => {
    return(
        <button type={type} className={`${className} w-44 rounded-sm bg-primaryBtn text-background py-2 px-6 text-lg font-semibold capitalize`}>
            {children}
        </button>
    )
}

export const SecondaryButton = ({children, className, path, type}: Readonly<{children: React.ReactNode, className?: string, path?: string, type?: 'button' | 'submit' | 'reset'}>) => {
    const router = useRouter()
    return (
        <button type={type} className={`${className}  w-44 rounded-sm bg-secondaryBtn text-background py-2 px-6 text-lg font-semibold capitalize`} onClick={() => router.push(path as string)}>
            {children}
        </button>
    )
}


export const IconButton = ({children, onClick, className}: Readonly<{children: React.ReactNode, onClick?: () => void, className?: string}>) => {
    return(
        <button className={`${className} rounded-full p-2`} onClick={onClick}>
            {children}
        </button>
    )
}


export const MobileFloatingButton = () => {
    return(
        <>
            <Image
            src={avatar}
            alt="avatar"
            width={50}
            height={50}
            />
        </>
    )
}
