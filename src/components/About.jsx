import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profile from '../img/profile.png';

gsap.registerPlugin(ScrollTrigger);

const About = React.forwardRef((props, ref) => {

    useEffect(() => {
        const profile = gsap.from('#profile', {
            opacity: 0,
            x: -500,
            duration: 1,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: '#profile',
                start: "top 65%", 
                end: "top 80%",   
                // markers: true,
                toggleActions: "play none none reverse",
            }
        });

        const bd = gsap.from('#bd', {
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

        const heading = gsap.from('#heading', {
            scale: 0,
            y: 10,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: "#heading",
                start: "top 65%",  
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
            if (heading.scrollTrigger) {
                heading.scrollTrigger.kill();
            }
        };
    }, []);

    return (
        <div ref={ref} className='flex justify-center mt-42 overflow-hidden smpc:mt-40'>
            <div className='w-[50%] ' id='profile'>
                <div className=' flex justify-center'>
                    <img className="h-72 w-72 rounded-full hover:cursor-pointer hover:rounded-xl transform hover:scale-105 transition ease-in-out duration-700 smpc:h-64 smpc:w-64" src={profile} alt="" />
                </div>
                <div className='ml-36 flex mt-5'>
                    <div className='w-2/5 font-semibold text-gray-400 text-2xl smpc:text-xl text-right mr-10 smpc:text-left'>
                        <div className=' mt-1'>NAME</div>
                        <div className=' mt-1'>BIRTHDAY</div>
                        <div className=' mt-1'>ADDRESS</div>
                        <div className=' mt-1'>PHONE</div>
                        <div className=' mt-1'>EMAIL</div>
                    </div>
                    <div className='w-3/5 text-xl smpc:text-lg'>
                        <div className=' mt-[8.5px] smpc:mt-[4px]'>Udata Aditya</div>
                        <div className=' mt-2 smpc:mt-1'>17th September 2001</div>
                        <div className=' mt-2 smpc:mt-1'>Hyderabad, Telangana, India</div>
                        <div className=' mt-2 smpc:mt-1'>+91-7330765431</div>
                        <div className=' mt-2 smpc:mt-1'>adityaudata@gmail.com</div>
                    </div>
                </div>

            </div>
            <div className='w-[50%]'>
                <div className='text-green-400 text-2xl mb-2' id='heading'>WHO I AM?</div>
                <div className='text-xl flex-col justify-center mr-5 smpc:text-lg' id='bd'>
                My name is UDATA ADITYA.
                I am a passionate and enthusiastic programmer dedicated to honing my skills in software development. As a quick learner with a self-driven attitude, I thrive on exploring new technologies and tackling complex problems. I have a strong interest in all aspects of web application development, and I am committed to making the web more accessible and innovative. My core expertise lies in JavaScript, Java which I leverage to create dynamic and efficient applications. I am actively seeking job opportunities that align with my skills and interests.
                </div>
            </div>
        </div>
    );
});

export default About;
