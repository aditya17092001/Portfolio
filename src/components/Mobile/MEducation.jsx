import React from 'react'
import educationImg from '../../img/education.png';
import MEducationCard from './MEducationCard';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const MEducation = React.forwardRef((props, ref) => {

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
            <div className='flex justify-center text-3xl mt-10 font-bold' id='eduHeading'>Education</div>
            <div className='flex flex-col justify-center' id='eduImg'>
                <img src={educationImg} alt="" sizes="" srcset="" />
            </div>
            <div className='flex'>
                <div className='w-full p-2' id='eduDetails'>
                    <div className=' mt-10 rounded-3xl bg-gray-800'>
                        <div className=' flex justify-center'><MEducationCard year={"2020-2024"} institutionName={"St. Peter's Engineering College"} level={"B.Tech"} cgpa={"9.10"}/></div>
                    </div>
                    <div className='mt-10 rounded-3xl bg-gray-800'>
                        <div className='flex justify-center'><MEducationCard year={"2018-2020"} institutionName={"Bhashyam IIT-JEE Jr College"} level={"INTERMEDIATE-XII"} percentage={"86.7"}/></div>
                    </div>
                    <div className='mt-10 rounded-3xl bg-gray-800'>
                        <div className='flex justify-center'><MEducationCard year={"2017-2018"} institutionName={"Bhashyam High School"} level={"SSC-X"} cgpa={"9.70"}/></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
});

export default MEducation
