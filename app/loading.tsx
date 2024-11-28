import Image from "next/image";
import Avatar from "../public/staringmaskedhill.svg"



const Loading = () => {
    return (
        <div className="w-full h-screen grid place-items-center">
            <Image
                src={Avatar}
                alt="an animated image of hill"
                width={200}
                height={200}
                className="animate-pulse"
                />
        </div>
    )
}

export default Loading