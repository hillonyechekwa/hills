'use client';

import * as React from 'react';
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from 'next-themes'
import { IconButton } from "@/components/Button"


const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();


    useEffect(() => setMounted(true), [])


    if (!mounted) return null //for now I'll replace it with the base64 image.




    if (resolvedTheme === 'dark') {
        return <IconButton onClick={() => setTheme('light')} className="absolute left-1/2 md:left-3/4 top-6 ml-0 md:ml-32 hover:bg-secondaryBtn hover:text-background z-20">
            <SunIcon />
        </IconButton>
    }

    if (resolvedTheme === 'light') {
        return <IconButton onClick={() => setTheme('dark')} className="absolute left-1/2 md:left-3/4 top-6 ml-0 md:ml-36 hover:bg-secondaryBtn hover:text-background z-20">
            <MoonIcon />
        </IconButton>
    }
}


export default ThemeToggle