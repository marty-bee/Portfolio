// import block
import ProjectPage from "@/app/_components/_project-page-comonents/projectPage"
import Image from "next/image"

// date import
import { bootrantProjectObj } from "@/app/projectData/project-page-data-files/bootrant-projectPageData "

export default function BootRant(){

    return(
        <>
            < ProjectPage projectTitle={bootrantProjectObj.projectTitle}
            buttonLinks={bootrantProjectObj.buttonLinks}
            techStack={bootrantProjectObj.techStack} />
            <br/>
            <section className="font-sans flex flex-col m-auto max-w-screen-lg">
            <h3 className="text-2xl font-bold">The idea</h3>
            <p className="text-left">A journal for boot-campers to encourage reflection on their challenges and successes</p>
            <br/>

            <h3 className="text-2xl font-bold">Discovery</h3>
            <p className="text-left">For this project I lead the team through a user centered design proces. To allow us to rapidly, research, define a solution/mvp and deliver it within the week sprint</p>
            <br/>

            <h3 className="text-2xl font-bold">Getting started</h3>
            <p>To promote cohesion with the newly formed team we first created a team manifesto to align our ways of working.</p>
            {/* team manifesto image */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/midtermmanifesto.jpg' alt='Team manifesto' fill={true} className="object-scale-down relative"/>
            </div>
            <p>Now we could begin with defining the scope/problem space</p>
            {/* define problem space */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/midtermproblemspace.jpg' alt='Defining the problem space' fill={true} className="object-scale-down relative"/>
            </div>
            <p>Using this as a framework informed user and competitor research.</p>
            {/* user comp research */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/midtermuserresearch.jpg' alt='User research' fill={true} className="object-scale-down relative"/>
            </div>
            <p>All of this culminated in a pair of user personas to represent our learnings</p>
            {/* personas */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/midtermpersonas.jpg' alt='User personas' fill={true} className="object-scale-down relative"/>
            </div>
            <p>Finally we arrived at a refined problem statement.</p>
            {/* refined problem */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/midtermproblemstatements.jpg' alt='Refined problem statement' fill={true} className="object-scale-down relative"/>
            </div>
            <h3 className="text-2xl font-bold">Ideation</h3>
            <p>Ideation was facilitated using the disney ideation method, then the ideas were refined using our personas and finally checked against feasibility given the contstraints of the project.
            </p>
            {/* ideation image */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/ideation.jpg' alt='Disney ideation' fill={true} className="object-scale-down relative"/>
            </div>
            <p>With the idea nailed down the ideal solution was mapped out and paired back into a deliverable MVP</p>
            {/*mvp */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/mvpdef.jpg' alt='MVP definition' fill={true} className="object-scale-down relative"/>
            </div>
            <p>Designs were rapidly created and agreed using figma.</p>
            {/* designs */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/designs.jpg' alt='Figma designs' fill={true} className="object-scale-down relative"/>
            </div>
            <p>The last step before coding was to finalise the user stories and subsquent tasks so the work could be completed efficiently.</p>
            {/* user stories */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/userjourneys.jpg' alt='User journeys' fill={true} className="object-scale-down relative"/>
            </div>
            <p>One of the functions I was responsbile for was creating the cards on the journal page. The data for these was provided via a fetch request getting all the records from our postgreSQL database.</p>
            {/* fetch image */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/fetch.png' alt='fetch request function' fill={true} className="object-scale-down relative"/>
            </div>
            <p>To the generate the cards I created a series of functions that were called on page load to iterate over the fetched data and manipulate the dom to create the elements in sequence.</p>
            {/* popdom */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/popdom.png' alt='function to populate the DOM with card elements' fill={true} className="object-scale-down relative"/>
            </div>
            <p>With these functions operating the working end result looks like this.</p>
            {/* journal page */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/bootrant/journalpage.png' alt='The final journal page' fill={true} className="object-scale-down relative"/>
            </div>
            <h3 className="text-2xl font-bold">Project reflections</h3>
            <p>We achieved our goals for this project. Given more time I would have wanted to define the desktop interface and used media queries to make it happen. As it stands it only truly functions on mobile views. I learnt a lot about DOM manipulation and got to grips with fetch requests during this project. There was a lot of trial and error getting the CSS, JavaScript and HTML to come together to programmatically display content.</p>
            </section>
        </>
    )
}