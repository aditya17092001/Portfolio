import React, { useEffect } from 'react'
import getBlogImg from '../../img/blog.png'
import MProjectCard from './MProjectCard'
import newsImg from '../../img/news.jpeg'
import ayoImg from '../../img/AYO.jpg'
import healthImg from '../../img/health.jpeg'
import chatImg from '../../img/chat.jpg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const MProject = React.forwardRef((props, ref) => {

    useEffect(() => {
        
        const projects = gsap.from('#projects > div', {
            opacity: 0,
            scale: 0,
            duration: 1.7,
            stagger: 0.2,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: "#projects",
                start: "top 40%",
                end: "top 100%",
                // markers: true,
                toggleActions: "play none none reverse",
            }
        })

        const projectHeading = gsap.from('#projectHeading', {
            opacity: 0,
            scale: 0,
            duration: 1.7,
            stagger: 0.1,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: "#projects",
                start: "top 80%",
                end: "top 100%",
                // markers: true,
                toggleActions: "play none none reverse",
            }
        })
        return () => {
            
        }
    }, [])
    
    return (
        <div ref={ref} className='mt-5 overflow-hidden'>
            <div className='text-3xl font-bold text-pink-600 flex justify-center' id='projectHeading'>Projects</div>

            <div className='flex flex-wrap justify-between' id='projects'>
                <div>
                    <MProjectCard title={"GetBlog"} img={getBlogImg} description={"A blogging website where users can read and post the blog's.."} techStack={"React, Typescript, Hono, Prisma ORM, SQL"} liveLink={"https://getblogudataaditya.netlify.app/"} GitHubRepo={"https://github.com/aditya17092001/GetBlogs"}/>
                </div>
                <div>
                    <MProjectCard title={"NewsMonkey"} img={newsImg} description={"Live news updates are categorized into different types and fetch real-time news from an API.."} techStack={"React, BottstrapCSS"} liveLink={"https://adityaudatanewsmonkey.netlify.app/"} GitHubRepo={"https://github.com/aditya17092001/NewsMonkey/tree/main"}/>
                </div>
                <div>
                    <MProjectCard title={"AYO"} img={ayoImg} description={"A hotel searching system helps users to find hotels based on their requirements.."} techStack={"Java, Servlets, JDBC, JSP, SQL, HTML, CSS"} GitHubRepo={"https://github.com/aditya17092001/HotelSearchingSystem-AYO"}/>
                </div>
                <div>
                    <MProjectCard title={"E-HeathCare"} img={healthImg} description={"A healthcare system that helps the government and autonomous bodies track the disease easily.."} techStack={"Java, Servlets, JDBC, JSP, SQL, HTML, CSS"} GitHubRepo={"https://github.com/aditya17092001/E-Healthcare-System"}/>
                </div>
                <div>
                    <MProjectCard title={"Chatting Application"} img={chatImg} description={"A chatting application designed for desktops, which helps organizations to communicate easier and faster.."} techStack={"Java, JavaFX, Swings, Web Sockets"} GitHubRepo={"https://github.com/aditya17092001/Chatting-Application"}/>
                </div>
            </div>
        </div>
    )
});

export default MProject
