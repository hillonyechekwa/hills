import deadpanHills from '../public/deadpanhill.svg'
import Image from 'next/image';
import Hero from "@/components/Hero";


const NotFound = () => {
    return(
        <main className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-gopher-sans)">
            <Hero>
                <section className="border-r-4 border-r-foreground px-10">
                    <h4 className="text-lg font-[family-name:var(--font-gopher-bold-sans) text-wrap">
                        Looks like this page hit a breakpoint... and we forgot to debug it. Don&apos;t worry, though! Hit the back button or let&apos;s refactor your route to get you where you need to go.
                    </h4>
                </section>
            <Image
                src={deadpanHills}
                alt="an avatar of hills"
                width={500}
                height={500}
                />
            </Hero>
        </main>
    )
}

export default NotFound;