import {CurlyBraces, Globe} from "lucide-react";


const Card = ({title, description, repolink, sitelink}:{title: string, description: string, repolink: string, sitelink?: string}) => {
    return(
        <div className="rounded-lg w-80 h-auto p-5 flex flex-col justify-evenly items-start gap-y-3 bg-primaryBtn text-background">
            <section>
                <h4 className="text-2xl capitalize">{title}</h4>
                <p className="text-sm">{description}</p>
            </section>
            <section className="flex flex-col justify-between gap-y-4">
                <a href={repolink} className="flex gap-x-2 items-center text-sm hover:underline hover:underline-offset-2">
                    <CurlyBraces size={15} />
                    link to {title} repo
                </a>

                {sitelink === ""? <a href="#"></a> : <a href={sitelink} className="flex gap-x-2 items-center text-sm hover:underline hover:underline-offset-2"><Globe size={15} /> go to site</a>}
            </section>
        </div>
    )
}


export default Card;