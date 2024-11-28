"use client"

import {PrimaryButton} from "@/components/Button";
import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [purpose, setPurpose] = useState("");
    const [message, setMessage] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/submit-form", {
            method: "POST",
            body: JSON.stringify({name, email, purpose, message})
        })

        if(res.status === 201){
            toast("Thank you for contacting me", {type: "success"})
        }else{
            toast("please check your inputs", {type: "error"})
        }
    }
    return(
        <section>
            <ToastContainer/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="mail@email.com" required />
                </div>
                <div>
                    <label htmlFor="purpose">Purpose</label>
                    <select name="purpose" id="purpose" value={purpose} onChange={(e)=> setPurpose(e.target.value)}>
                        <option value={""} defaultValue disabled>Select One</option>
                        <option value="recruitment/contract hire">Recruitment/Contract Hire</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="question">Question</option>
                        <option value="feedback/message">Feedback/Message</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" placeholder="Hi Hills" required></textarea>
                </div>
                <PrimaryButton type="submit">Submit</PrimaryButton>
            </form>
        </section>
    )
}

export default ContactForm