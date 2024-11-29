
import Image from "next/image";
import Avatar from '../../public/staringmaskedhill.svg'

const Footer = () => {
    return(
        <footer className="w-full py-10 px-6 bg-primaryBtn text-background flex justify-between items-center font-[family-name:var(--font-gopher-sans) mt-10">
            <ul className="flex gap-x-8 text-xl font-[family-name:var(--font-gopher-bold-sans)]">
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
            <section className="rounded-full p-5 bg-secondaryBtn">
                <Image src={Avatar} alt="avatar image of hills" width={200} height={200} />
            </section>
        </footer>
    )
}


export default Footer;