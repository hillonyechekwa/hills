import Hero from "@/components/Hero";
import Image from "next/image";
import Headshot from "@/public/hillsheadshot.jpg";
import Unaware from "@/public/hillsatdevfest.jpg"
import NotionFace from "@/public/my-notion-face-portrait.png"
import NoBgNotionFace from "@/public/my-notion-face-transparent.png"

export const metadata = {
    title: "About | Hill Onyechekwa",
}



const About = () => {
    return (
        <main className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen mb-48 font-[family-name:var(--font-gopher-sans)]">
            <Hero>
                <section className="relative top-10 md:top-0 md:border-r-4 border-foreground px-28 h-full flex justify-center items-center">
                    <h1 className="text-3xl md:text-6xl font-[family-name:var(--font-gopher-bold-sans)] ">
                        Get to know Me.
                    </h1>
                </section>
                <section className="grid place-items-center">
                    <Image src={NoBgNotionFace} alt="a silhouette of hills" className="relative w-48 md:w-[350px] lg:w-[600px]" />
                </section>
            </Hero>
            <section className="flex flex-col justify-around items-center w-full h-screen gap-y-5 px-6">

                <section className="flex flex-col gap-y-5 justify-evenly items-center px-8 md:px-48 lg:px-80">
                    <p className="text-wrap md:text-center lg:text-left">
                        I&apos;m Hills, a software engineer from Lagos, Nigeria, specialized in building modern, user-focused
                        web
                        applications. With an expertise that spans a 4 year career in building with frontend
                        technologies like React, Next.js, Astro.js alongside other top-shelf frontend tools,
                        backend tools like Node.js, Nest.js and languages like Rust, I create scalable, responsive
                        and secure solutions.
                    </p>
                    <p className="text-wrap md:text-center lg:text-left">
                        I&apos;ve worked on impactful projects in spaces like Proptech to Logistics and Mobility.
                        My skillset also includes cloud technologies like AWS, Azure DevOps, database management and
                        systems programming with Rust.
                    </p>
                    <p className="text-wrap md:text-center lg:text-left">
                        I thrive in collaborative environments and love solving complex problems but I also enjoy
                        writing
                        technical and non technical articles, exploring other interest around literature and art.
                    </p>
                </section>

                {/* <section className="flex justify-center items-center"> */}
                <Image src={Unaware} alt="an unaware shot of me from devfest lagos 2024" className="w-150px md:w-[300px] lg:w-[5 00px] mb-20" />
                {/* </section> */}
            </section>
        </main>
    )
}


export default About;