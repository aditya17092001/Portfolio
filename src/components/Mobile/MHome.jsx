import gsap  from "gsap";
import { useGSAP } from '@gsap/react';
import data from '../../img/data.svg';
import React from "react";

const MHome = React.forwardRef((props, ref) => {

    useGSAP(() => {
        gsap.from('#img', {
            x: 500,
            opacity: 0,
            duration: 2,
            delay: 2,
            ease: "back.inOut",
        }), 
        gsap.from('#details', {
            opacity: 0,
            x: -500,
            duration: 2,
            delay: 2,
            ease: "back.inOut"
        }),
        gsap.from('#line', {
            y: 500,
            duration: 2,
            delay: 2,
            ease: "back.inOut"
        })
    },[])

    return (
        <div ref={ref} className='overflow-hidden'>
            <div className='font-extrabold text-2xl items-center flex flex-col justify-center' id="details">
                <div className="p-5">
                    Hello,<br />
                    This is <span className="text-pink-600">UDATA ADITYA</span>, trying
                    to build a career as a <span className=" text-green-400">Software Developer</span>.
                </div>
                <div className="w-[100%] flex flex-wrap justify-center text-white text-center h-10">
                    <div onClick={() => window.open('https://leetcode.com/u/____aditya17/', '_blank')} className="h-9 w-9 mr-3  hover:cursor-pointer"> <svg className="hover:h-10 hover:w-10 "  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="Leetcode"> <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z" fill="#ffffff" className="color000000 svgShape"></path> <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z" fill="#ffffff" className="color000000 svgShape"></path> </svg>
                    </div>

                    <div onClick={() => window.open('https://www.geeksforgeeks.org/user/adityaudata/', '_blank')} className="h-9 w-16 mr-3 hover:cursor-pointer ">
                        <svg className=" h-full w-14 hover:w-16" xmlns="http://www.w3.org/2000/svg" id="GFG"  viewBox="0 0 59.077 29.539"><path id="Path_402" data-name="Path 402" d="M193.664,1471.966H169.257a9.748,9.748,0,0,1,17.129-5.146l3.55-3.57a14.77,14.77,0,0,0-25.724,8.716h-.085a14.77,14.77,0,0,0-25.724-8.716l3.55,3.57a9.748,9.748,0,0,1,17.129,5.146H134.674q-.043.565-.044,1.141a14.771,14.771,0,0,0,29.149,3.383h.778a14.769,14.769,0,0,0,29.149-3.383Q193.708,1472.531,193.664,1471.966ZM149.4,1482.855a9.749,9.749,0,0,1-9.151-6.385h18.3A9.75,9.75,0,0,1,149.4,1482.855Zm29.538,0a9.75,9.75,0,0,1-9.152-6.385h18.3A9.75,9.75,0,0,1,178.939,1482.855Z" transform="translate(-134.631 -1458.338)" fill="#ffffff"/></svg>
                    </div>


                    <div onClick={() => window.open('https://codeforces.com/profile/____aditya17', '_blank')} className="h-9 w-9 mr-3 hover:cursor-pointer ">
                        <svg className="h-full hover:h-10 hover:w-10" fill="#ffffff" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 3.25,4.75 C 3.664,4.75 4,5.086 4,5.5 l 0,5.25 C 4,11.164 3.664,11.5 3.25,11.5 l -1.5,0 C 1.3365,11.5 1,11.164 1,10.75 L 1,5.5 C 1,5.086 1.3365,4.75 1.75,4.75 l 1.5,0 z M 7.75,2.5 c 0.414,0 0.75,0.336 0.75,0.75 l 0,7.5 c 0,0.414 -0.336,0.75 -0.75,0.75 l -1.5,0 C 5.8365,11.5 5.5,11.164 5.5,10.75 l 0,-7.5 C 5.5,2.836 5.8365,2.5 6.25,2.5 l 1.5,0 z m 4.5,3.75 C 12.664,6.25 13,6.586 13,7 l 0,3.75 c 0,0.414 -0.336,0.75 -0.75,0.75 l -1.5,0 C 10.336,11.5 10,11.164 10,10.75 L 10,7 c 0,-0.414 0.336,-0.75 0.75,-0.75 l 1.5,0 z"></path></g></svg>
                    </div>

                    <div onClick={() => window.open('https://github.com/aditya17092001/', '_blank')} className="h-9 w-9 mr-3 hover:cursor-pointer ">
                        <svg className="hover:h-10 hover:w-10 " xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" id="Github"> <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                    </div>

                    
                    <div onClick={() => window.open('https://www.linkedin.com/in/udata-aditya-aa220023a', '_blank')} className="h-9 w-9 mr-3 hover:cursor-pointer ">
                        <svg className="hover:h-10 hover:w-10 " xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 100 100" id="Linkedin"><path d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                    </div>

                    
                    <div onClick={() => window.open('https://x.com/aditya_udata', '_blank')} className="h-9 w-9 mr-3 hover:cursor-pointer ">
                        <svg className="hover:h-10 hover:w-10 " xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512" id="Twitter"><path fill="#ffffff" fill-rule="evenodd" d="M434.478 16H77.519C43.718 16 16 43.719 16 77.521v356.957C16 468.282 43.718 496 77.519 496h356.959C468.281 496 496 468.282 496 434.479V77.521C496 43.719 468.281 16 434.478 16zM383.41 191.673a208.1 208.1 0 0 1 .167 8.385c0 12.851-1.517 25.989-4.462 39.035-16.657 73.858-79.8 145.029-182.544 145.029-37.094 0-71.649-10.701-100.767-29.07a133.6 133.6 0 0 0 15.707.914c30.789 0 59.12-10.327 81.621-27.71-28.762-.505-53.016-19.215-61.391-44.915 4.022.754 8.132 1.183 12.354 1.183 6.032 0 11.808-.81 17.347-2.282-22.142-4.414-40.068-19.729-48.088-40.025-2.884-7.262-4.355-15.155-4.355-23.444v-.815c9 4.855 18.869 7.766 29.625 8.107-17.619-11.608-29.309-31.42-29.309-53.848 0-11.854 3.22-22.971 8.857-32.535 32.408 39.143 80.815 64.911 135.437 67.618a65.645 65.645 0 0 1-1.688-14.746c0-35.729 29.414-64.699 65.717-64.699 18.913 0 35.985 7.841 47.944 20.421a132.144 132.144 0 0 0 41.759-15.722c-4.93 15.13-15.322 27.809-28.904 35.811 13.306-1.563 25.957-5.031 37.739-10.166-8.784 12.964-19.947 24.361-32.766 33.474z" clip-rule="evenodd" class="color1a1a1a svgShape"></path></svg>
                    </div>
                </div>
                <div className="flex">
                    <div className="h-9 font-bold text-2xl text-pink-600 mt-5 hover:cursor-pointer " onClick={() => window.open('https://drive.google.com/file/d/1y9C-2O76TWdYvQitdCtnsd1UkKhNDlWA/view?usp=sharing', '_blank')}> Resume </div>
                    <div className="animate-bounce h-9 w-9 mt-5 bg-gray-700 rounded-full ml-2 flex flex-col justify-center hover:cursor-pointer shadow-sm shadow-white z-0" onClick={() => window.open('https://drive.google.com/file/d/1y9C-2O76TWdYvQitdCtnsd1UkKhNDlWA/view?usp=sharing', '_blank')}>
                        <svg className="h-6"version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="16" y1="26" x2="16" y2="4"></line> <polyline fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" points="24.5,18 16,26.5 7.5,18 "></polyline> </g></svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-5 w-screen border bg-white" id="line"></div>
            <div className='items-center flex justify-center'>
                <img className='h-full w-full' id='img' src={data} alt="" srcset="" />
            </div>            
        </div>
    )
});

export default MHome;