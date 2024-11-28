

const Hero = ({children}: {children: React.ReactNode}  ) => {
    return(
        <header className="w-full h-screen flex items-center justify-between p-8">
            {children}
        </header>
    )
}


export default Hero