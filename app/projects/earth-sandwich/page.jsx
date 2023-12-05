// import block
import ProjectPage from "@/app/_components/_project-page-comonents/projectPage"
import Image from "next/image"

// date import
import { earthSandichProjectObj } from "@/app/projectData/project-page-data-files/earthsandwich-page-data"

export default function earthSandwich(){

    return(
        <>
            < ProjectPage projectTitle={earthSandichProjectObj.projectTitle}
            buttonLinks={earthSandichProjectObj.buttonLinks}
            techStack={earthSandichProjectObj.techStack} />
            <br/>
            <section className="font-sans flex flex-col m-auto">
            <h3 className="text-2xl font-bold">The idea</h3>
            <p className="text-left pl-2">A web application that lets you create an earth sandwich by letting you locate the exact opposite side of the Earth from a given location. It&apos;s a fun and educational tool inspired by Ze Frank&apos;s global sandwich challenge.</p>
            <br/>

            <h3 className="text-2xl font-bold">Development Journey</h3>
            <br/>
            <h3 className="text-2xl font-bold">Breaking down the inital problem</h3>
            <p className="pl-2">To start this project I first broke down at a very high level how the system should behave</p>
            <ul className="list-disc list-inside indent-4">
                <li>Take an input</li>
                <li>Math?</li>
                <li>Return output value</li>
                <li>Display this for the user to see</li>
            </ul>
            <br/>

            <h3 className="text-2xl font-bold">Making the math work</h3>
            <p>Starting with the basics I looked into how you find the antipode the direct opposite of a given location. This is a well understood engineering problem and there was lots of examples to use.</p>
            <p>I consulted several online calculators including <a href="https://www.omnicalculator.com/other/antipode">Omni Calculator</a> to know what the correct return value from the function should be.</p>
            <p className="font-bold">Input</p><p>(using my home town of Milton Keynes, UK)</p>
            <ul className="list-disc list-inside indent-4">
                <li>Latitude: 52.04</li>
                <li>Longitude: -0.76</li>
            </ul>
            <p className="font-bold">Expected Return</p>
            <ul className="list-disc list-inside indent-4">
                <li>Latitude: -52.04</li>
                <li>Longitude: 179.24</li>
            </ul>
            <p>To check the maths is behaving correctly I also ran the calculation backwards</p>
            {/* image from repo here */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/earthSandwich/earthsandwichjustlogging.png' alt='Earth sandwich testing' fill={true} className="object-scale-down relative"/>
            </div>
            <h3 className="text-2xl font-bold">Adding a map to make it visual</h3>
                <p>Lat and Long values aren&apos;t very useful or exicting for most people. I could only understand where it was refering to when I looked it up. To make this a better user experience I needed to remove that step.
                Enter Leaflet, a popular JavaScript library that provides interactive maps. Following the quick start I made a one page file combining the HTML, CSS and JS to establish viablity and get a proof of concept quickly.</p>

        {/* Repo image with map */}
        <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/earthSandwich/earthsandwichaddingleaflet.png' alt='Adding a map to the app' fill={true} className="object-scale-down relative"/>
            </div>
        <p>Whilst this works, it relies on users to be able to enter a valid lat/long. This is a pain for users for 3 main reasons.</p>
            <ul className="list-disc list-inside indent-4">
                <li>Knowing you lat/long requires you to look it up or have a GPS readout handy</li>
                <li>Entering 1 digit wrong can send you to a vastly different location</li>
                <li>There are several conventions for writing lat/long e.g. -52.04 is often written as 52.04 S. This adds extra complexity when parsing the inputs</li>
            </ul>
            <p>The solution to this is <p className="font-bold">geocoding</p> a process of taking a text-input such as an address and returning geographic co-ordinates.</p>

            <h3 className="text-2xl font-bold">Making it human accessible with geocoding</h3>
            <p>In theory this step was simple, find a geocoding service, access it and put it into the system. However at this stage the whole project was one combined html/css/js file as Leaflets documentation did not alude any other way to work with it.
            <br/>
            Before starting I needed to plan the expected operations:</p>
            {/* flow diagram goes here loading dark mode in only right now, will set ternery to render depending on user theme */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/earthSandwich/earthSandwichdatadiagdark.png' alt='Geocoding data plan' fill={true} className="object-scale-down relative"/>
            </div>

            <p>I found geoapifiy, a location platform that offered a geocoding api, with robust documentation and a node module to boot. In order to use this I would need to refactor my current code into a Node project.</p>

            <p className="font-bold">Attempt 1 - Just Node</p><p>To get started I installed the Leaflet NPM module, however every attempt using node lead to import and window errors from Leaflet. Essentially Leaflet tries to run before the page is rendered and I could not find a way around this.</p>
            <p className="font-bold">Attempt 2 - Node + Vite</p><p>To get started I installed the Leaflet NPM module, however every attempt using node lead to import and window errors from Leaflet. Essentially Leaflet tries to run before the page is rendered and I could not find a way around this.</p>

            <h3 className="text-2xl font-bold">Earth Sandwich</h3>
            <p>As it stands right now, the user can enter a location, use the autocomplete picker for ease and then watch as the map updates in a smooth fashion. The extra animation step makes it far more immersive then a simple reload.</p>
            {/* gif in use goes here */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/earthSandwich/earthsarnieautocomp.gif' alt='Earth Sandwich Demo' fill={true} className="object-scale-down relative"/>
            </div>
            <h3 className="text-2xl font-bold">Lessons learnt</h3>
            <p>I came into this project as a novice of node and wanted to push myself to make something, interactive, fun and educational.</p>
            <ul className="list-disc list-inside indent-4">
                <li><p className="font-bold">How to interact with Leaflet.</p>This experience will help me as I explore and seek to work with more third party resources.</li>
                <li><p className="font-bold">Debugging node module errors.</p>Not as obvious as the errors I encoutered ranged from my code sending unexpected inputs to functions in the modules or modules not communicating with each other. The more I break things the better I will get at solving these problems.</li>
                <li><p className="font-bold">How to set up vite for devlopment and using it to build production code.</p> My first time interacting with build tools, I know these are used widely for more complex devlopment projects so it is a skill I need to be comfortable with.</li>
                <li><p className="font-bold">Deploying projects to the web.</p>To make them a real entity for people to interact with. Finding ways to take the code from local to online took longer than I estimated even thought the end deployment via netilfy was in itself simple. Code needs to be shipped and used to be useful.</li>
                <li><p className="font-bold">The importance of reading documentation and thorough planning.</p>Any real sticking points I had during this typically came from misunderstanding a piece of documentation or planning at too high a level.</li>
            </ul>
            <h3 className="text-2xl font-bold">Future plans</h3>
            <p>To take this project to it&apos;s final form I will need to recreate this using 3js as to get the full interactive and experience it needs to be shown on a 3d globe. Seeing two maps side by side whilst accurate doesn&apos;t communicate very effectively the postional reality to users.</p>




            </section>
        </>
    )
}