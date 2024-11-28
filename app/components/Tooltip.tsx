
"use client"



import {useState} from "react";


const Tooltip = ({children, text} :{children: React.ReactNode, text: string}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return(
        <div
            className="relative inline-block "
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div
                    className="absolute font-[family-name:var(--font-gopher-sans)] bottom-full left-1/2 bg-secondaryBtn text-background px-1.5 py-2.5 rounded-md whitespace-nowrap z-10 mb-2.5 -translate-x-2/4 after:content-['*'] after:absolute after:top-full after:left-2/4 after:-ml-1.5 after:border-4 after:border-solid after:border-[black_transparent_transparent_transparent]"
                >{text}</div>
            )}
        </div>
    )
}


export default Tooltip;