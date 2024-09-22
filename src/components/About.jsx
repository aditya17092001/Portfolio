// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import profile from '../img/profile.png'

// function About() {

//     useGSAP(() => {
//         gsap.from('#profile', {
//             opacity: 0,
//             marker: true,
//             x: -500,
//             duration: 2,
//             delay: 3,
//             ease: "back.inOut",
//             scrollTrigger: {
//                 trigger: '#profile',
//                 scroller: "body",
//                 markers: true
//             }
//         })
//     },[])
//     return (
//         <div className='flex justify-center mt-96'>
//             <div className='w-2/5 flex justify-center' id='profile'>
//                 <img className="h-72 w-72 rounded-full"src={profile} alt="" />
//             </div>

//             <div className='w-3/5'>
//                 <div className='text-2xl flex-col justify-center'>   
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta enim provident vero sed veritatis nulla adipisci placeat voluptates commodi! Sequi sapiente id modi qui aspernatur nulla minima voluptatibus earum?
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default About;



import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profile from '../img/profile.png';

gsap.registerPlugin(ScrollTrigger);

function About() {
    useEffect(() => {
        const profile = gsap.from('#profile', {
            opacity: 0,
            x: -500,
            duration: 1,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: '#profile',
                start: "top 70%", 
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
                start: "top 70%", 
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
                start: "top 70%",  
                end: "top 20%",
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
        <div className='flex justify-center mt-42 overflow-hidden'>
            <div className='w-2/5 flex justify-center' id='profile'>
                <img className="h-72 w-72 rounded-full hover:cursor-pointer hover:rounded-xl transform hover:scale-105 transition ease-in-out duration-700" src={profile} alt="" />

            </div>
            <div className='w-3/5'>
                <div className='text-green-400 text-2xl mb-2' id='heading'>WHO I AM?</div>
                <div className='text-xl flex-col justify-center mr-5' id='bd'>
                My name is UDATA ADITYA.
                I am a passionate and enthusiastic programmer dedicated to honing my skills in software development. As a quick learner with a self-driven attitude, I thrive on exploring new technologies and tackling complex problems. I have a strong interest in all aspects of web application development, and I am committed to making the web more accessible and innovative. My core expertise lies in JavaScript, Java which I leverage to create dynamic and efficient applications. I am actively seeking job opportunities that align with my skills and interests.
                </div>
            </div>
        </div>
    );
}

export default About;
