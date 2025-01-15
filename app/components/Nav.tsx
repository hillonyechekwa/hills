
import { NavLinks } from "@/utils/Navlinks";
import useResponsive from "../utils/hooks/useResponsive";


const Nav = () => {
    // const isMobile = useResponsive('(max-width: 600px)');

    return(
        <nav className="flex items-center justify-center w-[100px] h-[100px] md:w-fit rounded-full bg-foreground dark:bg-foreground fixed top-[80%] left-[40%] md:left-[35%] z-30 shadow-md shadow-secondaryBtn">
            <NavLinks />
        {/*  add for mobile when needed  */}
        </nav>
    )
}


export default Nav;