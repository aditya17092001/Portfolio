import gsap  from "gsap";
import { useGSAP } from '@gsap/react';

function Navbar() {
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
            duration: 1,
            stagger: 0.3
        }), 
        tl.from('#border', {
            y: 50,
            opacity: 0,
            // duration: 1
        })
    }, [])

    return (
        <div>
            <div className="flex justify-between mx-24 pt-5" id="nav">
                <div className="text-3xl text-green-400 font-bold cursor-pointer" id='name'>UDATA ADITYA</div>
                <div className="flex text-xl" id="list">
                    <div className="mr-5 cursor-pointer">Home</div>
                    <div className="mr-5 cursor-pointer">About</div>
                    <div className="mr-5 cursor-pointer">Education</div>
                    <div className="mr-5 cursor-pointer">Projects</div>
                </div>
            </div>
            <div className="border-2 border-gray-900 border-b-white pt-2" id="border">
            </div>
        </div>
    )
}

export default Navbar;