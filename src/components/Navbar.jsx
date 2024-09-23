import gsap  from "gsap";
import { useGSAP } from '@gsap/react';

function Navbar({ scrollToHome, scrollToAbout, scrollToEducation, scrollToProjects, scrollToSkills }) {
    const tl = gsap.timeline();
    useGSAP(() => {
        tl.from('#name', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.5,
        }),
        tl.from('#list > div', {
            y: 50,
            opacity: 0,
            // duration: 1,
            stagger: 0.2
        }), 
        tl.from('#border', {
            y: 50,
            opacity: 0,
            // duration: 1
        })
    }, [])

    return (
        <div>
            <div className="flex justify-between mx-24 pt-5 h-16" id="nav">
                <div className="text-3xl text-green-400 font-bold cursor-pointer" id='name'>UDATA ADITYA</div>
                <div className="flex text-lg" id="list">
                    <div className="px-5 cursor-pointer hover:text-green-400" onClick={scrollToHome}>Home</div>
                    <div className="px-5 cursor-pointer hover:text-green-400" onClick={scrollToAbout}>About</div>
                    <div className="px-5 cursor-pointer hover:text-green-400" onClick={scrollToSkills}>Skills</div>
                    <div className="px-5 cursor-pointer hover:text-green-400" onClick={scrollToEducation}>Education</div>
                    <div className="px-5 cursor-pointer hover:text-green-400" onClick={scrollToProjects}>Projects</div>
                </div>
            </div>
            <div className="border-2 border-gray-900 border-b-white pt-2" id="border">
            </div>
        </div>
    )
}

export default Navbar;