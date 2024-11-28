import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ProjectsData from "@/data/projects.json"


const Projects = () => {
    return (
        <main className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-gopher-sans)]">
            <Hero>
                <section className="border-r-4 border-r-foreground px-10 flex flex-col gap-y-8">
                    <h1 className="text-6xl font-[family-name:var(--font-gopher-bold-sans)] ">Projects.</h1>
                    <p className="text-wrap w-72">
                        Building software isn&apos;t just a job to me but also something I enjoy.
                        Here are some of the projects I&apos;ve built for work and to sharpen my skills,
                        ranging from backend APIs to fullstack applications and systems engineering utilities.
                    </p>
                </section>
                <section className="grid grid-cols-2 grid-rows-2 gap-4">
                    {
                        ProjectsData.data.map(project => {
                            return (
                                <Card
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    repolink={project.repolink}
                                    sitelink={project.sitelink}
                                />
                            )
                        })
                    }
                </section>
            </Hero>
        </main>
    )
}

export default Projects