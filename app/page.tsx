
import Hero from '@/components/Hero'
import {SecondaryButton} from "@/components/Button";

export default function Home() {
  return (
    <div className="w-full grid grid-rows-[1fr] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-gopher-sans)]">
       <Hero>
          <section className="w-auto">
              <h1 className="flex flex-col text-2xl md:text-4xl lg:text-5xl xl:text-8xl font-[family-name:var(--font-gopher-bold-sans)] border-r-0 md:border-r-4 md:border-foreground py-4 px-0 md:px-28 relative top-10 md:top-0">
                  <span className="">Hill</span>
                  <span>Onyechekwa.</span>
              </h1>
          </section>
          <section className="flex flex-col items-center justify-evenly p-2 md:p-0 w-full h-full">
              <p className="grid xl:grid-rows-[20px_20px] md:grid-rows-[10px_10px] xl:grid-cols-[400px] grid-cols-[200px] md:grid-cols-[200px] justify-self-center text-xs xl:text-lg md:text-xs">
                  I&apos;m a Hills, a software developer who loves turning ideas
                  into sleek, functional web applications. Whether it&apos;s React, Node.js and Nest.js
                  or diving into Rust or AWS, I&apos;m all about building solutions that
                  make life easier and businesses thrive. Near pixel-perfect UIs, creative problem-solving,
                  and a touch of fun are my recipe for building impactful projects.
                  Let&apos;s make something awesome together!
              </p>
              <SecondaryButton className="" path="/projects">
                  see my works
              </SecondaryButton>
          </section>
       </Hero>

    </div>
  );
}
