

const Hero = ({children}: {children: React.ReactNode}  ) => {
    return(
        <header className="w-full h-[60vh] md:h-screen flex flex-col md:flex-row lg:flex-row: xl:flex-row items-center justify-between sm:max-xl:h-dvh">
            {children}
        </header>
    )
}


export default Hero