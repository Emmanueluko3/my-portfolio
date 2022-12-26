import Stephen from "../Images/stephen.jpg"

function About() {
    const imgClasses = "h-auto w-[50%] grid justify-items-center bg-white border-white border-8 rounded-lg drop-shadow-2xl"
    return ( 
        <>
            <div id="about" className="grid justify-items-center bg-gray-700 px-10 text-white py-4">
                <h2 className="py-10 font-bold text-5xl mb-5">About</h2>
                <div className="grid grid-cols-2 justify-items-center content-center items-center">
                    
                    <div className={imgClasses}>
                        <img src={Stephen} className="h-[350px] w-full rounded" alt="" />
                    </div>
                    <div className="grid justify-items-center text-center px-8 text-[30px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam nesciunt labore veritatis vero ex perspiciatis nemo hic perferendis possimus a, odit quibusdam fuga asperiores nostrum neque eaque commodi voluptas!
                    </div>
                </div>
            </div>
        </>
     );
}

export default About;