'use client'

// import block
import Image from "next/image"

// This component is to be generated for each project card

export default function ProjectCard({projectObj}) {

    // deconstruct object to use in the card - default values included for ease of debugging
    const {image, imageAlt = 'Good boy test image', projectTitle ='test title', projectDescription = 'test description, buy my a lifetimes supply of tunnocks please', gitHubLink, liveLink} = projectObj


    const handleGitHubButtonClick = () => {
        // navigate user to github repo
        window.location.href = gitHubLink
    }

    const handleLiveLinkButtonClick = () => {
        // navigate user to project live link
        window.location.href = liveLink
    }

    // navigate user to project page on portfolio

    // return object
    return (
        // currently hard coded values for testing, will change to state inputs when ready
        // box for the exterior of the card
        <div className="w-full h-60 sm:h-96 rounded-3xl border-black border-2 box-border p-4 flex flex-row mb-8 dark:border-white">
            {/* project image and a parent container so the images can always user 'cover' at normal aspect ratio */}
            <div className="overflow-hidden h-full w-1/2 relative box-border rounded-2xl">
                <Image src={image} alt={imageAlt} fill={true} className="object-cover w-10 h-10"/>
            </div>
            {/* Side div */}
            <div className="w-1/2 p-4 flex flex-col justify-center">
                <div className="m-auto">
                    {/* card title */}
                    <h2 className="font-sans text-lg sm:text-4xl font-bold">{projectTitle}</h2>
                    {/* card description */}
                    <p className="font-sans text-sm sm:text-xl">{projectDescription}</p>
                </div>
                {/* button holder */}
                <div className="flex">
                    {/* github button */}
                    <button  onClick={handleGitHubButtonClick} className="pr-4 mr-1">
                        <div className="relative h-6 w-6 sm:h-10 sm:w-10">
                        <Image src='/images/github_logos/github-mark.svg' alt='github logo' fill={true} />
                        </div>
                    </button>
                    {/* try it here button, only renders if liveLink is not null */}
                    {liveLink ? 
                    <button onClick={handleLiveLinkButtonClick} className="h-6 sm:h-10 font-sans text-xs sm:text-lg justify-center align-middle pl-1 pr-1 sm:pl-2 sm:pr-2 bg-slate-400 rounded-lg dark:bg-white dark:text-zinc-950">Live link</button> : 
                    null }
                </div>
            </div>
        </div>
    )
}