"use client"

import Link from "next/link";
import {HomeIcon, PenToolIcon, PuzzleIcon, RocketIcon, UserIcon, SendHorizonalIcon } from "lucide-react";
import { useState } from "react";
import useResponsive from "./hooks/useResponsive";
import Tooltip from "@/components/Tooltip"
import NoBgNotionFace from "../../public/my-notion-face-portrait.png"
import Image from "next/image";


const navItems = [
    { icon: HomeIcon, label: 'Home', route: "/" },
    { icon: UserIcon, label: 'About', route: "/about" },
    { icon: RocketIcon, label: 'Projects', route: "/projects" },
    { icon: PuzzleIcon, label: 'skills', route: "/skills" },
    { icon: PenToolIcon, label: 'blog', route: "/blog" },
    { icon: SendHorizonalIcon, label: 'contact', route: "/contact" }
]

export const DesktopNavLinks = () => {
    

    return (
        <ul className="flex items-center justify-evenly gap-x-5 p-5 text-background">
            {
                navItems.map(item => (
                    <li key={item.label}>
                        <Link href={item.route} >
                            <Tooltip text="item.label">
                                <item.icon />
                            </Tooltip>
                        </Link>
                    </li>
                ))
            }
            {/* <li>
                <Link href="/" >
                    <Tooltip text="Home">
                        <HomeIcon />
                    </Tooltip>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <Tooltip text="About">
                        <UserIcon />
                    </Tooltip>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <Tooltip text="Projects">
                        <RocketIcon />
                    </Tooltip>
                </Link>
            </li>
            <li>
                <Link href="/skills">
                    <Tooltip text="Skills">
                        <PuzzleIcon />
                    </Tooltip>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                    <Tooltip text="Blog">
                        <PenToolIcon />
                    </Tooltip>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <Tooltip text="Contact">
                        <SendHorizonalIcon />
                    </Tooltip>
                </Link>
            </li> */}
        </ul>
    )
}


export const MobileNavLinks = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)

    return (
        <div className="fixed" >
            <button  onClick={handleToggle}  className="w-[100px] h-[100px] relative rounded-full z-20">
                <Image src={NoBgNotionFace} alt="hill's notion face" className="rounded-full w-full h-full hue-rotate-90" />
            </button>

            {isOpen ? (
                <div className="absolute pb-20 bottom-12 right-0 left-0 bg-foreground dark:bg-foreground rounded-t-full pt-3">
                <ul className="flex flex-col items-center gap-y-4 px-1 z-10">
                    {
                        navItems.map(item => (
                            <li key={item.label} onClick={() => setIsOpen(!isOpen)}>
                                <Link href={item.route}  >
                                    <Tooltip text={item.label}>
                                        <item.icon className="text-background"/>
                                    </Tooltip>
                                </Link>
                            </li>
                        ))
                    }
                    </ul>
                    </div>
            ) : null}
        </div>
    )
}


export const NavLinks = () => {
    const isMobile = useResponsive('(max-width: 600px)')

    

    return (
        <>
            {isMobile ? <MobileNavLinks /> : <DesktopNavLinks />}
        </>
        )
}




