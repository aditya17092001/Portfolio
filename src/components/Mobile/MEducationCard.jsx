import React from 'react'

const MEducationCard = ({ year, institutionName, level, cgpa, percentage }) => {
    const educationlogo = (<svg viewBox="0 0 48 48" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><style type="text/css">  </style><path class="st0" d="M10.756,13.802l4.824,2.275v5.34c0,0.276,0.224,0.5,0.5,0.5h15.84c0.276,0,0.5-0.224,0.5-0.5v-5.34l4.11-1.938 v3.578c-0.581,0.207-1.001,0.757-1.001,1.409c0,0.828,0.673,1.501,1.501,1.501c0.828,0,1.501-0.673,1.501-1.501 c0-0.652-0.42-1.202-1.001-1.409V13.35c0-0.088-0.029-0.166-0.068-0.238c-0.01-0.019-0.022-0.034-0.035-0.051 c-0.043-0.059-0.095-0.107-0.159-0.142c-0.008-0.005-0.012-0.015-0.021-0.019l-13.03-6.28c-0.138-0.066-0.297-0.066-0.435,0 l-13.03,6.28c-0.173,0.083-0.284,0.26-0.283,0.452C10.471,13.545,10.582,13.72,10.756,13.802z M31.42,20.917H16.58V15.76v-1.883 l1.459-0.233c3.955-0.636,7.966-0.636,11.921,0l1.459,0.233v1.883V20.917z M37.03,19.627c-0.276,0-0.501-0.225-0.501-0.501 s0.225-0.501,0.501-0.501s0.501,0.225,0.501,0.501S37.306,19.627,37.03,19.627z M24,7.625l11.868,5.72l-3.448,1.626V13.45 c0-0.065-0.014-0.127-0.037-0.185c-0.008-0.02-0.022-0.037-0.033-0.056c-0.019-0.035-0.039-0.068-0.066-0.097 c-0.017-0.018-0.037-0.031-0.057-0.047c-0.028-0.023-0.057-0.044-0.09-0.06c-0.024-0.012-0.049-0.018-0.075-0.026 c-0.022-0.007-0.041-0.019-0.065-0.023l-1.879-0.3c-4.062-0.653-8.179-0.653-12.239,0l-1.88,0.3 c-0.023,0.004-0.042,0.016-0.064,0.023c-0.026,0.008-0.051,0.014-0.075,0.026c-0.033,0.016-0.061,0.038-0.089,0.06 c-0.019,0.016-0.04,0.029-0.057,0.047c-0.027,0.029-0.046,0.063-0.065,0.097c-0.011,0.019-0.025,0.035-0.033,0.056 c-0.023,0.058-0.037,0.119-0.037,0.185v1.521l-3.448-1.626L24,7.625z"></path><path class="st0" d="M7.5,41.5h11h11h11c0.276,0,0.5-0.224,0.5-0.5V30c0-0.276-0.224-0.5-0.5-0.5H30V24c0-0.276-0.224-0.5-0.5-0.5 h-11c-0.276,0-0.5,0.224-0.5,0.5v8H7.5C7.224,32,7,32.224,7,32.5V41C7,41.276,7.224,41.5,7.5,41.5z M40,30.5v10H30v-10H40z M19,24.5 h10V30v10.5H19v-8V24.5z M8,33h10v7.5H8V33z"></path></g></svg>)
    return ( 
            <div className='border items-center px-5 py-3 bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg rounded-full w-[90%]'>
                <div className='flex justify-center text-green-400 text-base'>{year}</div>
                <div className='flex'>
                    <div className='h-12 w-12 flex flex-col justify-center'>{educationlogo}</div>
                    <div className='h-16 border bg-white ml-3'></div>
                    <div className=''>
                        <div className='flex justify-start text-lg ml-2 text-pink-600'>{level}</div>
                        <div className='flex justify-start ml-2 text-[15px]'>{institutionName}</div>
                        <div className='flex justify-start ml-2 text-[12px]'>{cgpa ? `CGPA: ${cgpa}/10.0` : `Percentage: ${percentage}/100.0`}</div>
                    </div>
                </div>
            </div>
    )
}

export default MEducationCard