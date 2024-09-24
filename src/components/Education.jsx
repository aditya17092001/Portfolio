import React from 'react'
import educationImg from '../img/education.png';
import EducationCard from './EducationCard';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Education = React.forwardRef((props, ref) => {

    useEffect(() => {
        const eduDetails = gsap.from('#eduDetails > div', {
            x: -500,
            stagger: 0.2,
            duration: 1.5,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: '#eduDetails',
                start: "top 50%",
                // markers: true,
                toggleActions: "play none none reverse",
            }
        });
        
        const eduHeading = gsap.from('#eduHeading', {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: '#eduHeading',
                start: "top 50%",
                // markers:true,
                toggleActions: "play none none reverse"
            }
        });
        
        const eduImg = gsap.from('#eduImg', {
            x: 500,
            duration: 1.5,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: '#eduImg',
                start: "top 50%",
                toggleActions: "play none none reverse",
            }
        })

    
        return () => {
            if(eduDetails.scrollTrigger) {
                eduDetails.scrollTrigger.kill();
            }
            if(eduHeading.scrollTrigger) {
                eduHeading.scrollTrigger.kill();
            }
            if(eduImg) {
                eduImg.scrollTrigger.kill();
            }
        }
    }, [])
    

    return (
        <div ref={ref} className='overflow-hidden pb-10'>
            <div className='flex justify-center text-5xl mt-10 font-bold smpc:text-3xl' id='eduHeading'>Education</div>
            <div className='flex'>
                <div className='w-3/5 smpc:w-[50%]' id='eduDetails'>
                    <div className='w-3/4 ml-40 mt-10 rounded-3xl bg-gray-800 smpc:w-full smpc:ml-10 smpcx:w-[90%] smpcx:ml-10'>
                        <div className=' flex justify-center'><EducationCard year={"2020-2024"} institutionName={"St. Peter's Engineering College"} level={"BACHELORS OF TECHNOLOGY"} cgpa={"9.10"}/></div>
                    </div>
                    <div className='w-3/4 ml-40 mt-10 rounded-3xl bg-gray-800 smpc:w-full smpc:ml-10 smpcx:w-[90%] smpcx:ml-10'>
                        <div className='flex justify-center'><EducationCard year={"2018-2020"} institutionName={"Bhashyam IIT-JEE Jr College"} level={"INTERMEDIATE-XII"} percentage={"86.7"}/></div>
                    </div>
                    <div className='w-3/4 ml-40 mt-10 rounded-3xl bg-gray-800 smpc:w-full smpc:ml-10 smpcx:w-[90%] smpcx:ml-10'>
                        <div className='flex justify-center'><EducationCard year={"2017-2018"} institutionName={"Bhashyam High School"} level={"SSC-X"} cgpa={"9.70"}/></div>
                    </div>
                    
                </div>
                <div className='w-2/5 flex flex-col justify-center smpc:w-[50%] smpcx:w-[50%]' id='eduImg'>
                    <img src={educationImg} alt="" sizes="" srcset="" />
                </div>
            </div>
        </div>
    )
});

export default Education
