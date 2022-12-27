import Stephen from "../Images/stephen.jpg"

function About() {
    const imgClasses = "w-full h-full lg:h-auto lg:w-[50%] grid justify-items-center bg-white border-white border-8 rounded-lg drop-shadow-2xl"
    return ( 
        <>
            <div id="about" className="container grid justify-items-center bg-white px-10 text-white py-4">
                <h2 className="py-5 lg:py-10 font-bold lg:text-5xl text-3xl mb-5">About</h2>
                <div className="grid lg:grid-cols-2 justify-items-center content-center items-center">
                    
                    <div className={imgClasses}>
                        <img src={Stephen} className="lg:h-[350px] lg:w-full rounded" alt="" />
                    </div>
                    <p className="grid justify-items-center lg:text-center lg:px-8 py-5 lg:text-[25px] w-full">
                    {/* <span className="text-customPink">Better design, better experiences</span>  */}
                    I'm a Front-End Developer based in Akwa Ibom, Nigeria who loves clean, simple & unique web applications. I love creating websites that are appealing practical and ideal for the client and the users. I am currently learning nodeJs and have a keen interest in Web3, Blockchain and NFT market that are slowly forging the future of the internet.
                    </p>
                </div>
            </div>
        </>
     );
}

export default About;