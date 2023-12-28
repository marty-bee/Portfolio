// import block
import ProjectPage from "@/app/_components/_project-page-comonents/projectPage"
import Image from "next/image"

// date import
import { internObj } from "@/app/projectData/project-page-data-files/internObj-projectPageData "

export default function internProj(){

    return(
        <>
            < ProjectPage projectTitle={internObj.projectTitle}
            buttonLinks={internObj.buttonLinks}
            techStack={internObj.techStack} />
            <br/>
            <section className="font-sans flex flex-col m-auto max-w-screen-lg">
            <h3 className="text-2xl font-bold">The project</h3>
            <p className="text-left">This was the final project at the School of Code, it was a 4 week team project to deliver a working MVP for a clients brief. During this project I was team leader for both the first and final weeks, I also took ownership of tickets/Trello board to ensure the project could be delivered on such a tight timeline. </p>
            <br/>

            <h3 className="text-2xl font-bold">Our solution: Intern</h3>
            {/* dashboard image */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            <p className="text-left">A data dashboard giving you all the useful information at a glance, named as such as it&apos;s unpaid and does all the grunt work so you don&apos;t have to.</p>
            <ul className="list-disc list-inside pl-2 indent-4">
                <li>Attendance tracking - for boot-camper safeguarding and record keeping.</li>
                <li>Thumbometer - rapid, recorded comprehension check for bootcampers, giving in the moment feedback.</li>
                <li>Name picker - ensuring quick fire questions are spread around the entire cohort removing any accidental biases.</li>
                <li>Engagement logger - engaged bootcampers typically have better results, keeping tabs on everyone is hard, a simple traffic light system gives visibility so coaches can make better decisions.</li>
            </ul>
            <br/>
            <h3 className="text-2xl font-bold">The brief</h3>
            <p className="text-left">Our client was the School of Code itself, it utilised Zoom to facilitate day to day operations. However they did not leverage the rich data available from Zoom&apos;s API, SDK&apos;s and web-hook services. They wanted us to explore these capabilities and create a dashboard to assist the running of the bootcamp.</p>
            {/* figjam screen shots */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            <p className="text-left">Our structure for 4 weeks ended up being divided up as follows:</p>
            <ul className="list-disc list-inside pl-2 indent-4">
                <li>Week 1: Planning, Research into Zoom Docs and the problem space, UX and UI design, Deployment Pipelines, Agree deliverables with the stakeholder.</li>
                <li>Week 2: Build the front end using hardcoded props, create login system, plan for back end and database set-up.</li>
                <li>Week 3: Back end implementation, feed data from database into front end. Start implementation of Zoom to database pipelines.</li>
                <li>Week 4: Deliver MVP, refining and testing.</li>
            </ul>
            <h3 className="text-2xl font-bold">Week 1</h3>
            <h4 className="text-xl font-bold">Team set up</h4>
            <p className="text-left">To get started, the team all introduced themselves, a chance to understand everyones backgrounds, strengths and weaknesses. We then created and agreed on a team manifesto to give us an agreed operating procedure for the next few weeks.</p>
            {/* team manifesto */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>

            <h4 className="text-xl font-bold">Kick off</h4>
            <p className="text-left">Upon receiving the brief we laid out our assumptions so we could understand the gaps in our knowledge and assert what we needed to verify to ensure we understand the problem so that we could design an appropriate solution.</p>
            <p className="text-left">Time was dedicated to studying the Zoom documentation as there are a lot of options and interactions that can be tracked using specific means. We couldn&apos;t begin to ideate if we did not understand the capabilities available to us.</p>

            <h4 className="text-xl font-bold">Personas</h4>
            <p className="text-left">After our research activities we created UX persona&apos;s for our key users. This allowed us to build empathy and a understand how the problem impacted their workflows.</p>
            {/* ux personas */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>

            <h4 className="text-xl font-bold">Ideation</h4>
            <p className="text-left">I then led the team through a Disney ideation workshop to rapidly and creatively iterate on solutions for our personas. These initial ideas were built out into minimum viable products which then were extended into minimum viable experiences (MVE). User stories could then be written for each MVE and lo-fi mockups of how this might feel could be created.</p>
            {/* disney ideation */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>

            <h4 className="text-xl font-bold">Feasibility</h4>
            <p className="text-left">In order to ensure our ideas were actually deliverable within the time frame t-shirt sizing was used to estimate the time it would take to deliver each feature. This then allowed us to present it to the stakeholder with restrictions on how many features they could request in this 4 week sprint cycle. We could deliver 1 small, 1 medium and 1 large feature outside of the base requirements of authentication and attendance tracking.</p>
            {/* feasibility */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            {/* shirt sizing */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>

            <h4 className="text-xl font-bold">Stakeholder meeting</h4>
            <p className="text-left">We presented our findings and negotiated with the stakeholder what the final deliverables needed to be. We settled on providing the following:</p>
            <ul className="list-disc list-inside pl-2 indent-4">
                <li>Authentication -  needed to keep personal data secure and safe.</li>
                <li>Attendance tracking and reporting - legal and funding requirement needed by the business.</li>
                <li>Random name picker - ensures quick fire questions are spread around the bootcamper cohort evenly.</li>
                <li>Zoom polls - allowing quick simple checks on how the bootcampers are finding the current content, replacing a rough understanding with solid numbers.</li>
                <li>Engagement logger - giving an initial metric to allow tracking of how engaged bootcampers are with the course, based on research that more engaged students tend to get better outcomes no matter what their starting point is.</li>
            </ul>
            {/* agreed plan */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            <h4 className="text-xl font-bold">Finishing up week 1</h4>
            <p className="text-left">To close out the week we set up the team Trello board, agreed epics, user stories and tasks that needed to be completed. Ran a team retro to understand how everyone was getting on and make any adjustments to our processes as needed.</p>
            {/* trello board */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>

            <p className="text-left">Agreed on our tech stack of NextJs, TypeScript and Tailwind. These were chosen for the following reasons:</p>
            <ul className="list-disc list-inside pl-2 indent-4">
                <li>NextJS file system routing made setting up api end points simple to understand, we hoped to take advantage of the ISR features to be able to refetch the data in the dashboard at set intervals (this turned out to be a miss understanding on our part, which we rectified by using a cron job and setTimeout when needed).</li>
                <li>Tailwind as it&apos;s a rapid way to iterate CSS and keeps everything in the same file in a simple manner. Allowing single component files to be near fully self contained, making the project more manageable.</li>
                <li>Typescript, type safety and self documenting features were deemed desirable to streamline development. Whilst there was an initial worry as it was a slightly new syntax the team believed the advantages would be well worth it as the project progressed.</li>
                <li>The final reason for this is we all as part of this bootcamp wanted to learn new things, this was a great opportunity to try out new tools and systems.</li>
                <li> Set up our initial project and created our first deploy using Vercel.</li>
            </ul>

            <h3 className="text-2xl font-bold">Week 2</h3>
            <p className="text-left">With the epics all broken down into stories and tasks the work could be divided throughout the team. One team implemented supabase authentication to create a login wall, required to keep our site secure. Whilst the other started work on the components. By the end of the week we had all 4 dashboard components created using hardcoded data objects to allow us to test out the functionality alongside a working login system.</p>
            {/* login page */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            <p className="text-left">I led the planning of the backend structure, including the database schema, the MVC setup and how we could calculate an initial engagement score using the data available to us from our zoom API.</p>
            {/* database schema */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            {/* data flow excalidraw plan */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            {/* MVC? */}
            {/* enagement logger calculation */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            <p className="text-left">The week concluded with setting up the database and a stakeholder presentation to update them on our progress and our proposed sprint goals for the remaining weeks of the project.</p>


            <h3 className="text-2xl font-bold">Week 3</h3>
            <p className="text-left">Started with creating the algorithms to calculate the engagement grade of a bootcamper alongside my colleague Kit, whilst the team focused on creating a piece of middleware to check and refresh our Zoom access token (as it expires every hour) if needed to assist us with our Zoom API calls.</p>
            {/* engagent algo codes */}
            <p className="text-left">I took ownership of setting up the MVC system to allow communication with our database, once this was completed the team began work fetching data and translating into props for our react component&apos;s. The focus was on making everything work with our test database first and then using the Zoom API in the future to populate the database.</p>
            {/* mvc ? */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            <p className="text-left">We had real issues this week as the team struggled with translating the database requests into the props needed. The solution to this was found to be writing explicit Trello tickets breaking down each expected step to give then an example of how they might tackle the problem.</p>
            {/* break it down ticket? */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            <p className="text-left">Our initial understanding of how we could use NextJS&apos;s ISR to reload components at set intervals was incorrect. ISR is designed to be used at a page level, not at a component level. So we could only use it to reload the whole dashboard which wasn&apos;t ideal. Upon some brainstorming and googling I found that we could update our database using a scheduled cron job as Vercel supports them and then using setTimeout on components to get them to reload/refetch their props from the database.</p>
            {/* cron job */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>


            <h3 className="text-2xl font-bold">Week 4</h3>
            <p className="text-left">Entering the final week we were behind schedule, this led to a tight structured plan on what we needed to deliver. A refined Trello board later and we got to work. First step was to finish all the test database to front end pipelines.</p>
            <p className="text-left">With these created one half of the team began creating end to end tests to validate and refine our code, the other half with me began work on setting up the pipeline between Zoom and our database.</p>
            <p className="text-left">During testing the team kept coming up against a &grave;too many connections&grave; error with our database. Initially to try and get around this I set a max pool connection limit and increased our allowance from our provider ElephantSQL but we kept hitting the limits. However this still caused problems as if multiple users are accessing the system our connection limit of 15 was still far to few to give good performance. The solution found to this was to migrate the database to another provider supabase as they provided a much higher connection limit.</p>
            <p className="text-left">In order to try and reduce calls to the database for performance, the function to update all the engagment grades was refined from using a nested loop to caclulating the breakpoints ahead of time. Reducing it from 0n2 (quadratic) to 0n (linear) thereby dramatically improving it&apos;s scalability</p>
            {/* calculate median and break points once */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            <p className="text-left">Last-minute additions to the project included creating a simulated zoom poll prop for demonstration purposes as without a live zoom call to use it on it&apos;s hard to communicate the value of the tool.</p>
            {/* gif showing zoom polls */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            <p className="text-left">To close the project for Christmas I ran a team retro across the whole project with a focus on the positives to raise moral after a challenging few weeks.</p>
            {/* final retro */}
            <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>


            <h3 className="text-2xl font-bold">Future iterations, if we had another 4 week sprint cycle</h3>
            <ul className="list-disc list-inside pl-2 indent-4">
                <li>Focus on delivering all the data pipelines from Zoom to the database so every feature ran on our live deployment.</li>
                <li>Set up Cron jobs for all the required features so the database gets updated automatically in the background.</li>
                <li>Allow users to configure the engagement logger calculation from the front end as it will need adjustment as time goes on.</li>
                <li>Design and create the user flows for setting up intern for a new bootcamp as well as closing it down at the end.</li>
            </ul>

            <h3 className="text-2xl font-bold">Personal reflections</h3>
            <ul className="list-disc list-inside pl-2 indent-4">
                <li>This project was real challenge, lots of new things to learn and manage all at once. I really enjoyed it though as the learning part of the process was really enjoyable.</li>
                <li>One moment that really sticks in my head is when we got the &grave;download CSV buttons&grave; to work I was so excited. It took it in my head from being just a website to a proper software with usable outputs.</li>
                {/* download button */}
                <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
                <li>Managing the team was tough but a solid exercise in team working, soft skills and stakeholder management.</li>
                <li>I am aware of the areas I need to improve upon going forward. I want to become proficient in using web-hooks and web-sockets as I can see their utility but like state in react it doesn&apos;t come naturally to me yet.</li>
                <li> Typescript was a joy to use, it makes a lot of sense to me as I have done some projects before in C. The self-documenting set-up was a godsend during the project, just being able to understand what a function needs by hovering over it. I remember it saving us lots of time debugging by when writing a function where two inputs were to be summed it informed me that it viewed them as strings so it wanted to concatenate them when I needed them summed. Getting that visual heads up ensured I knew that I just needed to cast it explicitly to a number for the function to behave as intended before I had even ran it.</li>
                {/* hovering over typescript function */}
                <div className="h-32 sm:h-96 md:h-500 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8 max-w-screen-2xl">
                <Image src='/images/portfolio/portfolioFigmaDesigns.png' alt='figma designs' fill={true} className="object-scale-down relatrive"/>
            </div>
            </ul>




            </section>
        </>
    )
}