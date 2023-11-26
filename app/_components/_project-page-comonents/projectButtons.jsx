'use client'
// has to be client side component for interactivity

// import block
import Image from "next/image"

// component to render buttons with link(s) to the projects gitHub repo and live deployment if applicable
export default function ProjectButtons({buttonLinks}) {

    // deconstruct object to create the buttons - default values included for ease of debugging
    const {gitHubLink ='test title', liveLink = false } = buttonLinks


    const handleGitHubButtonClick = () => {
        // navigate user to github repo
        window.location.href = gitHubLink
    }

    const handleLiveLinkButtonClick = () => {
        // navigate user to project live link
        window.location.href = liveLink
    }


    // return block
    return (
        <>
            {/* button holder */}
            <div className="flex p-1 sm:p-2 xl:p-4 align-middle justify-center">
            {/* github button */}
            <button  onClick={handleGitHubButtonClick} className="h-8 w-auto sm:w-1/6 sm:h-10 font-sans text-xs sm:text-lg text-center justify-center items-center p-1 sm:p-2 bg-slate-400 rounded-lg dark:bg-white dark:text-zinc-950 flex flex-row mr-1 sm:mr-2 hover:scale-105 active:scale-95 duration-150 ">
                Source Code
                <div className="relative ml-1 sm:ml-2 h-4 w-4 sm:h-6 sm:w-6">
                <Image src='/images/github_logos/github-mark.svg' alt='github logo' fill={true}/>
                </div>
            </button>
                {/*website button, only renders if liveLink is not null */}
                {liveLink ? 
                <button onClick={handleLiveLinkButtonClick} className="h-8 w-auto sm:w-1/6 sm:h-10 font-sans text-xs sm:text-lg text-center justify-center items-center p-1 sm:p-2 bg-slate-400 rounded-lg dark:bg-white dark:text-zinc-950 flex flex-row ml-1 sm:ml-2 hover:scale-105 active:scale-95 duration-150">Website
                <div className="relative ml-1 sm:ml-2 h-4 w-4 sm:h-6 sm:w-6">
                <Image src='/images/cfpb_website_icon.svg' alt='website logo' fill={true}/>
                </div>
                </button> : null }
            </div>
        </>
    )
    }