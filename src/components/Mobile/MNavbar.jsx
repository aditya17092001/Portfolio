import gsap  from "gsap";
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function MNavbar({ scrollToHome, scrollToAbout, scrollToEducation, scrollToProjects, scrollToSkills, scrollToContacts }) {

    const [click, setClick] = useState(false);

    const tl = gsap.timeline();
    useGSAP(() => {
        tl.from('#name', {
            y: 50,
            opacity: 0,
            duration: 1,
        }), 
        tl.from('#menuIcon',{
            y: 50,
            duration: 1,
            opacity: 0,
        })
        tl.from('#border', {
            y: 50,
            opacity: 0,
        })
    }, [])

    useEffect(() => {
        console.log(click);
        var navbar = false;
        if(click) {
            const navbar = gsap.from('#list > div', {
                x: 50,
                opacity: 0,
                // duration: 1,
                stagger: 0.2,
            })
        }
    
        return () => {
            if(navbar.scrollTrigger) {
                navbar.scrollTrigger.kill();
            }
        }
    }, [click])
    
    const handleClick = () => {
        setClick(prevClick => !prevClick);
    }

    return (
        <div>
            <div className="flex justify-between px-3" id="nav">
                <div className="relative text-2xl text-green-400 font-bold cursor-pointer pt-2" id='name'>UDATA ADITYA</div>

                <div className="w-10 mt-1" id="menuIcon">
                    <svg onClick={handleClick}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 8.25H4.5V6.75H19.5V8.25Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 12.75H4.5V11.25H19.5V12.75Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 17.25H4.5V15.75H19.5V17.25Z" fill="#ffffff"></path> </g></svg>
                </div>
                <div className={`ml-[25%] w-[75%] flex flex-col bg-gray-800 h-screen ${click ? 'absolute' : 'hidden'} z-10`} onClick={handleClick}> 
                    <div className="ml-[80%] h-10 w-10 flex justify-center mt-1 z-10" >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <div className="w-full bg-white border"></div>
                    <div className="flex flex-col text-lg" id="list">
                        <div className="px-5 cursor-pointer text-2xl mt-2 hover:text-green-400" onClick={scrollToHome}>Home</div>
                        <div className="px-5 cursor-pointer text-2xl mt-2 hover:text-green-400" onClick={scrollToAbout}>About</div>
                        <div className="px-5 cursor-pointer text-2xl mt-2 hover:text-green-400" onClick={scrollToSkills}>Skills</div>
                        <div className="px-5 cursor-pointer text-2xl mt-2 hover:text-green-400 " onClick={scrollToEducation}>Education</div>
                        <div className="px-5 cursor-pointer text-2xl mt-2 hover:text-green-400 " onClick={scrollToProjects}>Projects</div>
                        <div className="px-5 cursor-pointer text-2xl mt-2 hover:text-green-400 " onClick={scrollToContacts}>Contact</div>
                        </div>
                </div>

            </div>
            {click ? null : <div className="border-2 border-gray-900 border-b-white pt-2 " id="border"></div>}
        </div>
    )
}

export default MNavbar;