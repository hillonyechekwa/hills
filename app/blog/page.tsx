import Hero from "@/components/Hero";
import axios from "axios";
import Image from "next/image";
import hsbbanner from "@/public/hbsbanner.png"


export const metadata = {
    "title": "Blog | Hill Onyechekwa"
}

const POSTS_QUERY = `
 query Publication($host: String) {
        publication(host: $host) {
        posts(first: 6){
          edges{
            node{
              id
              title
              url
              tags {
                name
              }
              coverImage{
                url
              }
              brief
              readTimeInMinutes
              series{
                name
              }
            }
          }
        }
    }
}
  `

interface queryVars {
    host: string;
}

interface postNode {
    coverImage: {
        url: string;
    };
    title?: string;
    id: number;
    brief: string;
    readTimeInMinutes: number;
    url: string;
}

async function fetchPosts(query: string, variables: queryVars) {
    try {
        const response = await axios.post("https://gql.hashnode.com", {
            query,
            variables
        },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            });
        // if(response.data.errors){
        //     throw new Error(response.data.errors.map((e) => e.message).join(", "));
        // }

        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('graphql fetch error', error.message)
            if ('response' in error) {
                console.error('graphql fetch error', error.message ? error.message : (error as any).response?.data)
            } else {
                console.error("an unknown error occurred", error)
            }
            throw error
        }
    }

}




const Blog = async () => {
    const posts = await fetchPosts(POSTS_QUERY, {
        "host": "hillsbuildsthings.hashnode.dev"
    })

    // console.log(posts.data)

    return (
        <main className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-gopher-sans)]">
            <Hero>
                <section className="md:border-r-4 md:border-r-foreground md:px-20 lg:px-28 relative top-32 md:top-0">
                    <h1 className="text-3xl md:text-6xl font-[family-name:var(--font-gopher-bold-sans)]">Blog.</h1>
                </section>
                <section className="px-24 lg:px-72 flex justify-center items-center">
                    <p className="text-xs md:text-sm text-wrap">
                        When I&apos;m not coding, I write technical articles
                        where I document How-tos, my personal projects
                        and new complex technical concepts I come across as
                        I progress in my work.
                    </p>
                </section>
            </Hero>
            <section className="w-auto h-auto lg:h-screen grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-6 md:gap-x-8 md:gap-y-5 lg:gap-64 p-0 md:p-0 lg:p-3 mt-10 md:mt-0">
                {
                    posts.data.publication.posts.edges.map(({ node }: { node: postNode }) => {

                        // console.log("coverimage", node.coverImage)
                        const coverImage = node.coverImage



                        return (
                            <section key={node.id} className="w-52 md:w-72 h-[400px]  mx-auto flex flex-col gap-y-3 p-5 bg-primaryBtn rounded-md text-background">
                                {
                                    coverImage ?
                                        <Image src={coverImage.url} alt={node.title as string} width={250} height={100} className="rounded-md" />
                                        :
                                        <Image src={hsbbanner} alt={node.title as string} width={250} height={100} className="rounded-md" />
                                }

                                <a href={node.url} className="text-xl hover:underline hover:underline-offset-8">{node.title}</a>
                                <p className="text-sm line-clamp-3">{node.brief}</p>
                                <p>read time: {node.readTimeInMinutes} mins</p>
                            </section>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Blog