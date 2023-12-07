'use client'
// has to be client side component for interactivity

// import block
import Image from "next/image"

// component to render buttons with link(s) to the projects gitHub repo and live deployment if applicable
export default function ProjectButtons({buttonLinks}) {

    // deconstruct object to create the buttons - default values included for ease of debugging
    const {gitHubLink ='test title', liveLink = false } = buttonLinks

    console.log(`gitHubLink: ${gitHubLink}`) // debug logger github
    console.log(`liveLink: ${liveLink}`) // debug logger live


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
            <button  onClick={handleGitHubButtonClick} className="h-8 min-w-[8rem] md:w-1/6 sm:h-10 font-sans text-xs xl:text-lg text-center justify-center items-center p-1 sm:p-2 bg-zinc-800 text-white rounded-lg  dark:bg-white dark:text-zinc-950 flex flex-row flex-nowrap mr-1 sm:mr-2 hover:scale-105 active:scale-95 duration-150 ">
                Source Code
                <svg className="h-4 sm:h-6 ml-1 sm:ml-2 dark:fill-zinc-950 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" alt='github logo'>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                </svg>
                {/* <div className="relative ml-1 sm:ml-2 h-4 w-4 sm:h-6 sm:w-6"> */}
                {/* <Image src='/images/github_logos/github-mark.svg' alt='github logo' fill={true}/> */}
                {/* </div> */}
            </button>
                {/*website button, only renders if liveLink is not null */}
                {liveLink ? 
                <button onClick={handleLiveLinkButtonClick} className="h-8 w-auto sm:w-1/6 sm:h-10 font-sans text-xs sm:text-lg text-center justify-center items-center p-1 sm:p-2 bg-zinc-800 rounded-lg dark:bg-white text-white dark:text-zinc-950  flex flex-row ml-1 sm:ml-2 hover:scale-105 active:scale-95 duration-150">Website
                <svg className="h-4 sm:h-6 ml-1 sm:ml-2 dark:fill-zinc-950 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" alt='website logo'>
                <path d="m600 60c-297.6 0-540 242.4-540 540s242.4 540 540 540 540-242.4 540-540-242.4-540-540-540zm267.6 486c-4.8008-132-31.199-246-74.398-331.2 126 63.602 216 186 234 331.2zm-462-331.2c-42 85.199-69.602 199.2-74.402 331.2h-159.6c19.199-145.2 109.2-267.6 234-331.2zm-73.203 439.2c7.1992 135.6 38.398 253.2 87.602 337.2-133.2-60-228-187.2-248.4-337.2zm267.6 360c-61.199 0-146.4-135.6-159.6-360h319.2c-14.398 225.6-98.398 360-159.6 360zm-160.8-468c9.6016-235.2 97.199-378 160.8-378s150 142.8 160.8 378zm340.8 445.2c48-84 80.398-201.6 86.398-337.2h160.8c-19.199 150-115.2 277.2-247.2 337.2z"/>
                </svg>
                </button> : null }
            </div>
        </>
    )
    }