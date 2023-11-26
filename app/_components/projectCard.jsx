'use client'

// import block
import Image from "next/image"
import Link from "next/link"

// This component is to be generated for each project card

export default function ProjectCard({projectObj}) {

    // deconstruct object to use in the card - default values included for ease of debugging
    const {image, imageAlt = 'Good boy test image', projectTitle ='test title', projectDescription = 'test description, buy my a lifetimes supply of tunnocks please', projectLink = '/projects/dave'} = projectObj
    // navigate user to project page on portfolio

    // return object
    return (
        // currently hard coded values for testing, will change to state inputs when ready
        // box for the exterior of the card
        <>
        <Link href={projectLink} className="w-full" >
        <div className="w-full sm:h-60 lg:h-96 rounded-3xl border-black border-2 box-border p-4 flex flex-row mb-8 dark:border-white hover:scale-101 active:scale-99 duration-150">
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
            </div>
        </div>
        </Link>
        </>
    )
}