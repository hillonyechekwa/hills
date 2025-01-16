
import Image from "next/image";
import Avatar from '../../public/staringmaskedhill.svg';

const Footer = () => {
    return(
        <footer className="w-full px-3 pt-5 md:px-6 bg-primaryBtn text-background flex flex-col gap-y-8 md:flex-row justify-between items-center font-[family-name:var(--font-gopher-sans) mt-auto">
            <ul className="flex flex-col gap-y-5 md:flex-row md:gap-x-8 text-base lg:text-xl xl:text-xl md:text-lg font-[family-name:var(--font-gopher-bold-sans)]">
                <li>
                    <a className="hover:text-foreground hover:underline hover:underline-offset-4" href="https://github.com/hillonyechekwa">Github</a>
                </li>
                <li>
                    <a className="hover:text-foreground hover:underline hover:underline-offset-4" href="https://linkedin.com/in/hillaryonyechekwa">LinkedIn</a>
                </li>
                <li>
                    <a className="hover:text-foreground hover:underline hover:underline-offset-4" href="https://x.com/hillonyechekwa">X</a>
                </li>
                <li>
                    <a className="hover:text-foreground hover:underline hover:underline-offset-4" href="https://hashnode.com/@thegridsmith">GitHub</a>
                </li>
            </ul>
            <section className="rounded-full bg-secondaryBtn max-w-[200px] max-h-[200px] relative">
                <Image src={Avatar} alt="avatar image of hills" className="relative" />
            </section>
        </footer>
    )
}


export default Footer;