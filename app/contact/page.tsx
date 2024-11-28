import Hero from "@/components/Hero";
import Hillsprofile from "../../public/profile-img.jpg"
import Image from "next/image";
import ContactForm from "@/components/ContactForm";



const Contact = () => {
    return(
        <main className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-gopher-sans)]">
            <Hero>
                <section className="border-r-4 border-r-foreground px-28">
                    <h1  className="text-6xl font-[family-name:var(--font-gopher-bold-sans)]">What can I do for your business?</h1>
                </section>
                <section>
                    <ContactForm />
                </section>
            </Hero>
        </main>
    )
}

export default Contact