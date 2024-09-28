import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profile from '../../img/profile.png';

gsap.registerPlugin(ScrollTrigger);

const MAbout = React.forwardRef((props, ref) => {

    useEffect(() => {
        const profile = gsap.from('#profile', {
            opacity: 0,
            x: -500,
            duration: 1,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: '#profile',
                start: "top 60%", 
                end: "top 80%",   
                // markers: true,
                toggleActions: "play none none reverse",
            }
        });

        const bd = gsap.from('#bd, #gheading', {
            x: 500,
            opacity: 0,
            duration: 1,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: '#bd',
                start: "top 65%", 
                end: "top 80%",   
                // markers: true,
                toggleActions: "play none none reverse",
            }
        }); 

        const aboutHeading = gsap.from('#aboutHeading', {
            scale: 0,
            y: 10,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: "#aboutHeading",
                start: "top 80%",  
                end: "top 80%",
                // markers:true,
                toggleActions: "play none none reverse",
            }
        });

        return () => {
            if (profile.scrollTrigger) {
                profile.scrollTrigger.kill();
            }
            if (bd.scrollTrigger) {
                bd.scrollTrigger.kill();
            }
            if (aboutHeading.scrollTrigger) {
                aboutHeading.scrollTrigger.kill();
            }
        };
    }, []);

    return (
        <div ref={ref} className='mt-24 overflow-hidden '>
            <div className='text-pink-600 text-2xl font-bold text-center mb-2' id='aboutHeading'>ABOUT ME</div>
            <div className='' id='profile'>
                <div className=' flex justify-center'>
                    <img className="h-72 w-72 rounded-full hover:cursor-pointer hover:rounded-xl transform hover:scale-105 transition ease-in-out duration-700 " src={profile} alt="" />
                </div>
                <div className='flex justify-center mt-5'>
                    <div className='font-semibold  text-lg pl-3 ml-1'>
                        <div className=' mt-1'> <span className='text-gray-400'>NAME</span>   <span className='ml-10'>Udata Aditya</span></div>
                        <div className=' mt-1'><span className='text-gray-400'>BIRTHDAY</span><span className='ml-2'>17th September 2001</span></div>
                        <div className=' mt-1'><span className='text-gray-400'>ADDRESS</span><span className='ml-4'>Hyderabad, Telangana, India</span></div>
                        <div className=' mt-1'><span className='text-gray-400'>PHONE</span>  <span className=' ml-7'>+91-7330765431</span></div>
                        <div className=' mt-1'><span className='text-gray-400'>EMAIL</span>  <span className=' ml-10'>adityaudata@gmail.com</span></div>
                    </div>
                </div>

            </div>
            <div className='w-full p-5'>
            <div className='text-green-400 text-2xl font-bold text-center mb-2' id='gheading'>WHO I AM?</div>
                <div className='bg-gray-800 rounded-lg p-5 text-base flex-col justify-center mt-5 text-justify' id='bd'>
                My name is UDATA ADITYA.
                I am a passionate and enthusiastic programmer dedicated to honing my skills in software development. As a quick learner with a self-driven attitude, I thrive on exploring new technologies and tackling complex problems. I have a strong interest in all aspects of web application development, and I am committed to making the web more accessible and innovative. My core expertise lies in JavaScript, Java which I leverage to create dynamic and efficient applications. I am actively seeking job opportunities that align with my skills and interests.
                </div>
            </div>
        </div>
    );
});

export default MAbout;
