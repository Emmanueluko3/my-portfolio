// import { Fragment } from "react"
import Hello from "../Images/hello-man.svg"
import GitHub from "../Images/github.png"
import Tweet from "../Images/tweet.svg"
import WhatsApp from "../Images/WhatsApp.svg"
import LinkedIn from "../Images/linkedIn.svg"
import Facebook from "../Images/facebook.svg"
import Instagram from "../Images/instagram.svg"
import Js from "../Images/js.png"
import ReactJs from "../Images/React-js.png"
import NextJs from "../Images/Nextjs.png"
import VueJs from "../Images/Vuejs.png"
import TailwindCSS from "../Images/Tailwind_CSS_Logo.png"
import Bootstrap from "../Images/Bootstrap_logo.png"


function Hero() {
    const medias = [
        { name: GitHub, href: 'https://github.com/Emmanueluko3', atlernate: 'Github'},
        { name: Tweet, href: 'https://twitter.com/__froshy', atlernate: 'Twitter'},
        { name: WhatsApp, href: '#', atlernate: 'WhatsApp'},
        { name: LinkedIn, href: 'https://www.linkedin.com/in/nuelisteven/', atlernate: 'LinkedIn'},
        { name: Facebook, href: 'https://web.facebook.com/Emmanueluko3.td/', atlernate: 'Facebook'},
        { name: Instagram, href: 'https://www.instagram.com/__froshy/', atlernate: 'Instagram'},
    ];

    const stacks = [
        {   
            avatar: Js, 
            title: 'JavaScript'
        },
        { 
            avatar: ReactJs, 
            title: 'ReactJs'
        },
        { 
            avatar: VueJs, 
            title: 'VueJs'
        },
        { 
            avatar: NextJs, 
            title: 'NextJs'
        },
        { 
            avatar: TailwindCSS, 
            title: 'Tailwind CSS'
        },
        { 
            avatar: Bootstrap, 
            title: 'Bootstrap'
        },
    ];

    const stack = stacks.map((item, key) =>(
        <div key={key} className="grid justify-items-center py-4">
            <div className="grid justify-items-center items-center absolute mt-[-28px] rounded-full bg-gray-700 h-14 w-14">
                <div className="grid justify-items-center items-center h-12 w-12 bg-white rounded-full p-[15%]"> 
                    <img src={item.avatar} alt="" />
                </div> 
            </div>
            <div className="bg-customPink  w-40 h-16 rounded-lg flex justify-center items-end">
                <h3 className="text-white font-semibold py-2 text-[20px]">{item.title}</h3>
            </div>
        </div>
    ));

    return ( 
        <>
            <div className="flex flex-wrap content-center items-center bg-gray-700 py-10 px-8 h-auto">
                <div className="flex-1 w-[50%] text-white">
                    <h2 className="font-bold text-6xl py-2">Hi, I am <br />Emmanuel Stephen</h2>
                    <p className="font-bold py-2 mb-2 text-gray-400">Frontend Developer</p>
                    <button className="rounded bg-customPink p-2 px-4 hover:opacity-75"><a href="./assets/Emmanuel'sResume.pdf" target={'_blank'} className="font-bold">Resume</a></button>
                    <div className="flex space-x-4 py-4">
                        {medias.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="hover:opacity-75 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            
                        >
                            <img className="w-8" src={item.name} alt={item.atlernate} />
                        </a>
                        ))}
                    </div>
                </div>
                <div className="grid justify-items-center w-[50%] mx-auto">
                    <div className="right-img grid justify-items-center">
                        <img src={Hello} className="p-3 pl-5 h-80 w-80 bg-gray-800 rounded-full" alt="" />
                    </div>
                </div>
                <div className="justify-center flex space-x-4 py-8 w-[90%] mx-auto">
                    {stack}
                </div>
            </div>
        </>
     );
}

export default Hero;