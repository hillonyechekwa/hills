import Hero from "@/components/Hero";
import gql from '@/public/gql.png'
import js from '@/public/js.png'
import react from '@/public/react.png'
import nest from '@/public/nest.png'
import rust from '@/public/rust.png'
import Image from 'next/image'



const skillsArr = [
    {
        name: "JavaScript",
        icon: js
    }, {
        name: "React",
        icon: react
    }, {
        name: "Nest",
        icon: nest
    }, {
        name: "GraphQl",
        icon: gql
    }, {
        name: "Rust",
        icon: rust
    },
]

const SkillsPage = () => {
    return (
        <main className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-gopher-sans)]">
            <Hero>
                <section className="md:border-r-4 md:border-r-foreground px-5 md:px-20">
                    <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-gopher-bold-sans)]">Skills.</h1>
                </section>
                <section className="w-full grid place-items-center">
                    <section className="flex flex-col h-56 gap-y-6 w-48 md:w-60 overflow-y-scroll rounded-md p-3 border-2 border-primaryBtn scroll-y-contain">
                        {
                            skillsArr.map((skill, i) => {
                                return (
                                    <section key={i} className="flex justify-between items-center gap-x-2">
                                        <h4>{skill.name}</h4>
                                        <Image
                                            src={skill.icon}
                                            alt={`${skill.name}-icon`}
                                            width={70}
                                            height={70} />
                                    </section>
                                )
                            })
                        }
                    </section>
                </section>
            </Hero>
        </main>
    )
}


export default SkillsPage