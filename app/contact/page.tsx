'use client'


import Hero from "@/components/Hero";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import Image from "next/image";
import Hillsprofile from "@/public/profile-img.jpg";
import { PrimaryButton } from "@/components/Button";




const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [purpose, setPurpose] = useState("");
    const [message, setMessage] = useState("");


    async function handleSubmit(e: React.FormEvent) {
        try {
            e.preventDefault();
            const formData = {
                name,
                email,
                purpose,
                message
            }
            const res = await fetch("/api/submit-notion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const result = await res.json()

            if (result.success) {
                toast("Thank you for contacting me", { type: "success" })
            } else {
                toast("please check your inputs", { type: "error" })
            }
        } catch (error) {
            console.error('Submission Error', error);
        }
    }



    return (
        <main className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-gopher-sans)]">
            <Hero>
                <section className="md:border-r-4 md:border-r-foreground px-10">
                    <h1 className="text-2xl lg:text-4xl xl:text-6xl font-[family-name:var(--font-gopher-bold-sans)]">What can I do for your business?</h1>
                </section>
                <section className="w-full grid place-items-center md:p-10">
                    <section className="w-auto h-[500px] lg:h-auto p-0 md:p-4 rounded-lg bg-secondaryBtn text-background">
                        <ToastContainer />
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-y-5 justify-evenly items-center">
                            <header className="w-full hidden lg:block">
                                <Image src={Hillsprofile} alt="a profile burst image of hills" className="w-[200px] lg:w-[600px] rounded-md mx-auto" />
                            </header>
                            <section className="flex flex-col gap-y-8 p-5 justify-evenly">
                                <div className="flex gap-x-3 w-full justify-evenly items-center">
                                    <label htmlFor="name" className="text-xs md:text-sm">Full Name: </label>
                                    <input
                                        className="w-[120px] md:w-[150px] lg:w-[200px] xl:w-[250px] border-[1px] p-1 rounded-md border-background text-background bg-transparent"
                                        type="text" id="name" name="name" required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="w-full flex justify-evenly items-center">
                                    <label htmlFor="email" className="text-xs md:text-sm">Email: </label>
                                    <input
                                        className="w-[120px] md:w-[150px] lg:w-[200px] xl:w-[250px] border-[1px] border-background ml-8 p-1 rounded-md text-background bg-transparent "
                                        type="email" id="email" name="email" required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="w-full flex gap-x-3 justify-evenly items-center">
                                    <label htmlFor="purpose" className="text-xs md:text-sm">Purpose:</label>
                                    <select
                                        className="w-[120px] md:w-[150px] lg:w-[200px] xl:w-[250px] border-[1px] border-background p-1 rounded-md text-background bg-transparent"
                                        name="purpose" id="purpose" required
                                        value={purpose}
                                        onChange={(e) => setPurpose(e.target.value)}
                                    >
                                        <option className="text-background bg-foreground" value={""}
                                            defaultValue="Select One" disabled>Select One
                                        </option>
                                        <option className="text-background bg-foreground"
                                            value="recruitment/contract hire">Recruitment/Contract Hire
                                        </option>
                                        <option className="text-background bg-foreground"
                                            value="collaboration">Collaboration
                                        </option>
                                        <option className="text-background bg-foreground" value="question">Question
                                        </option>
                                        <option className="text-background bg-foreground"
                                            value="feedback/message">Feedback/Message
                                        </option>
                                    </select>
                                </div>
                                <div className="w-fit flex  gap-x-4">
                                    <label htmlFor="message" className="col-span-1 text-xs md:text-sm">Message:</label>
                                    <textarea
                                        className="col-start-2 col-span-3 w-[120px] md:w-56 border-[1px] border-background rounded-md text-background bg-transparent"
                                        name="message" cols={100} rows={5} id="message" required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>

                                </div>
                                <PrimaryButton className="mx-auto" type="submit">Submit</PrimaryButton>
                            </section>
                        </form>
                    </section>
                </section>
            </Hero>
        </main>
    )
}

export default Contact