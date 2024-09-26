import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);
const Contact = React.forwardRef((props, ref) => {

    useEffect(() => {
        const contactHeading = gsap.from('#contactHeading, #contactData', {
            y: -200,
            opacity: 0,
            scale: 0,
            // delay: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '#contactHeading, #contactData',
                start: "top 70%",
                end: 'top 90%',
                // markers: true,
                toggleActions: "play none none reverse",
            }
        })
        const contactForm = gsap.from('#form > div', {
            y: 200,
            // delay: 1,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#form',
                start: "top 70%",
                end: 'top 90%',
                // markers: true,
                toggleActions: "play none none reverse",
            }
        })
        return () => {
            if(contactForm.scrollTrigger) {
                contactForm.scrollTrigger.kill();
            }
            if(contactHeading.scrollTrigger) {
                contactHeading.scrollTrigger.kill();
            }
        }
    }, [])
    
    return (
        <div ref={ref} className='overflow-hidden'>
            <div className='flex justify-center text-5xl mt-10 font-bold smpc:text-3xl' id='contactHeading'>Contact</div>

            <div className='mt-10 text-center' id='contactData'>
                <div className='text-3xl text-green-400 font-bold'>Get In Touch</div>
                <div className='text-xl text-gray-400 font-bold mt-2 '>
                    If you have any suggestion, project or even you want to say hello, please fill out the form below and I will reply you shortly.
                </div>
            </div>

            <div className='flex justify-center mt-5'>  
                <form class="max-w-sm mx-auto" id='form'>
                    <div>
                        <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <div className=" w-96 relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#ffffff"></path> <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#ffffff"></path> </g></svg>
                            </div>
                            <input type="text" id="email-address-icon" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full ps-10 p-2.5 " placeholder="John Doe" required/>
                        </div>
                    </div>

                    <div>
                        <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3">Your Email</label>
                        <div className=" w-96 relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 -3.5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -261.000000)" fill="#ffffff"> <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                            </div>
                            <input type="text" id="email-address-icon" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full ps-10 p-2.5 " placeholder="johndoe@gmail.com" required/>
                        </div>
                    </div>

                    <div>
                        <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3">Your Phone</label>
                        <div className=" w-96 relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-5 h-10 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" fill="#ffffff"></path> </g></svg>
                            </div>
                            <input type="text" id="email-address-icon" className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full ps-10 p-2.5 " placeholder="+91-1234567890" required/>
                        </div>
                    </div>

                    <div>
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3">Your Message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." required></textarea>
                    </div>

                    <div className='text-center mt-5'>
                        <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
});

export default Contact
