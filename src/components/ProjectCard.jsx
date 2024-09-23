import React from 'react'

const ProjectCard = ({ img, title, description, techStack, liveLink, GitHubRepo }) => {
    console.log(liveLink)
    return (
        <div className='m-5 w-96 h-[480px] border rounded-3xl bg-gray-800 shadow-lg shadow-white/50 hover:shadow-none '>
            <img className="border-b rounded-3xl"src={img}alt="" />
            <div className=''>
                <div className='text-2xl font-semibold flex justify-center text-green-400'>{title}</div>
                <div className='p-3'>{description}</div>
                <div className='p-3'><span className='font-bold'>Tech Stack: </span> {techStack}</div>
                <div className='flex justify-between'>
                    <div>
                    <button type="button" className={`m-3 p-3 text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ${liveLink === undefined ? 'cursor-no-drop' : ''}`} onClick={() => {if (liveLink !== undefined) {window.open(liveLink, '_blank'); }}}>
                        Live Link
                    </button>

                    </div>
                    <div>
                        <button type="button" className="m-3 p-3 text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={() => {window.open(GitHubRepo, '_blank')}}>GitHub Repo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
