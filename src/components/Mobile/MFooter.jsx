import gsap from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function MFooter({ scrollToHome }) {


    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#footer',
                start: "top 93%",  
                end: "top 93%",
                // markers: true,
                toggleActions: "play none none reverse",
            }
        });

        tl.from('#footer > div', {
            y: -50,
            opacity: 0,
            // duration: 1,
            stagger: 0.2
        }); 

        return () => {
            ScrollTrigger.kill();
        }
    }, [])
    
    return (
        <div className='h-20 mt-10' id='footer'>
            <div className="border-2 border-gray-900 border-b-white pt-2" id="endBorder"></div>
            
            <div className='flex justify-between'>
                <div className='mt-5 ml-2'>&copy; Developer Portfolio by <span className='font-semibold text-green-400'>Udata Aditya</span>.
                </div>
                    <div className="animate-bounce h-9 w-9 mt-5 mr-3 bg-gray-700 rounded-full ml-2 flex flex-col justify-center hover:cursor-pointer shadow-sm shadow-white" onClick={scrollToHome}>
                        <svg className='h-6 smpc:h-5' fill="#ffffff" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256,34,432,210l-21.2,21.21L271,91.4V478H241V91.4L101.16,231.25,80,210Z"></path></g></svg>
                    </div>
                </div>
        </div>
    )
}

export default MFooter
