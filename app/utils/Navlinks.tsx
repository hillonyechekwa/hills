
import Link from "next/link";
import {HomeIcon, PenToolIcon, PuzzleIcon, RocketIcon, UserIcon, SendHorizonalIcon } from "lucide-react";
import Tooltip from "@/components/Tooltip"


export const NavLinks = () => {
    return(
        <ul className="flex items-center justify-evenly gap-x-5 p-5 text-background">
            <li>
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
            </li>
        </ul>
    )
}


export const NavLinksMobile = () => {
    return(
        <ul></ul>
    )
}

