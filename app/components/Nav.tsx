

import {NavLinks} from "@/utils/Navlinks";


const Nav = () => {
    return(
        <nav className="flex items-center justify-center w-fit rounded-full bg-foreground dark:bg-foreground fixed top-3/4 left-1/3 mt-10 mx-16 z-30 shadow-md shadow-secondaryBtn">
            <NavLinks />
        {/*  add for mobile when needed  */}
        </nav>
    )
}


export default Nav;