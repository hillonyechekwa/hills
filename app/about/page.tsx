import Hero from "@/components/Hero";
import Image from "next/image";
import Headshot from "../../public/hillsheadshot.jpg";
import Unaware from "../../public/hillsatdevfest.jpg"

export const  metadata = {
    title: "About | Hill Onyechekwa",
}



const About = () => {
    return (
        <main className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-gopher-sans)]">
            <Hero>
                <section className="border-r-4 border-foreground px-28 h-full flex justify-center items-center">
                    <h1 className="text-6xl font-[family-name:var(--font-gopher-bold-sans)] ">
                        Get to know Me.
                    </h1>
                </section>
                <section className="">
                    <Image src={Headshot} alt="a silhouette of hills" width={600} height={300} className="rounded-lg hue-rotate-90" />
                </section>
            </Hero>
            <section className="flex flex-col-reverse justify-around items-center w-full h-screen gap-y-5">
                <section className="flex justify-center items-center">
                    <Image src={Unaware} alt="an unaware shot of me from devfest lagos 2024" width={600} height={300}/>
                </section>
                <section className="flex flex-col gap-y-5 justify-evenly items-center px-80">
                    <p className="text-wrap">
                        I"m Hills, a software engineer from Lagos, Nigeria, specialized in building modern, user-focused
                        web
                        applications. With an expertise that spans a 4 year career in building with frontend
                        technologies like React, Next.js, Astro.js alongside other top-shelf frontend tools,
                        backend tools like Node.js, Nest.js and languages like Rust, I create scalable, responsive
                        and secure solutions.
                    </p>
                    <p className="text-wrap">
                        I've worked on impactful projects in spaces like Proptech to Logistics and Mobility.
                        My skillset also includes cloud technologies like AWS, Azure DevOps, database management and
                        systems programming with Rust.
                    </p>
                    <p className="text-wrap">
                        I thrive in collaborative environments and love solving complex problems but I also enjoy
                        writing
                        technical and non technical articles, exploring other interest around literature and art.
                    </p>
                </section>

            </section>
        </main>
    )
}


export default About;