// import block
import ProjectPage from "@/app/_components/_project-page-comonents/projectPage"
import Image from "next/image"

// date import
import { stockProjectObj } from "@/app/projectData/project-page-data-files/stockr-projectPageData"

export default function Stockr(){

    return(
        <>
            < ProjectPage projectTitle={stockProjectObj.projectTitle}
            buttonLinks={stockProjectObj.buttonLinks}
            techStack={stockProjectObj.techStack} />
            <br/>
            <section className="font-sans flex flex-col m-auto">
            <h3 className="text-2xl font-bold">The idea</h3>
            <p className="text-left pl-2">Returning the 2 best performing and worst perfoming stocks of the day. A chance to practice working with external data</p>
            <br/>

            <h3 className="text-2xl font-bold">The intial plan</h3>
            <p className="pl-2">First step was to break down the problem into chunks to begin understanding how to tackle this.</p>
            <ul className="list-disc list-inside indent-4">
                <li>First get stock price data for a range of stocks for today</li>
                <li>Then store those somewhere</li>
                <li>Finally search the stored data and return the 2 with the highest gain and the 2 with the biggest loss</li>
            </ul>
            <br/>

            <h3 className="text-2xl font-bold">Getting started</h3>
            <p>Firstly I searched for a data source for stock information and found Finnhub.io. They had robust documentation a node module and crucially for me a free tier to play around with.</p>
            {/* quote image */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/stockr/finnhubapi.png' alt='finnhub API' fill={true} className="object-scale-down relative"/>
            </div>
            <p>Test API call for the current quote of Amazon using thuderclient.</p>
            <p>Created a function to call on a loop so I can repeat this request for every stock in a list.</p>
            {/* loop image */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/stockr/loopquoter.png' alt='finnhub API' fill={true} className="object-scale-down relative"/>
            </div>
            <p>As this was going to have to run over an extended period of time I created unit tests to ensure the return values were as expected.</p>
            {/* test screenshot */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/stockr/samplefromtestfile.png' alt='finnhub API' fill={true} className="object-scale-down relative"/>
            </div>
            <p>With the API requirements understood and tested the next step was to set up a postgreSQL database so I can manage and query the data the API returned.</p>
            {/* elephant sql image */}
            <div className="h-32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/stockr/elephantsql.png' alt='finnhub API' fill={true} className="object-scale-down relative"/>
            </div>
            <p>I now needed a way reset the database, this consisted of dropping any tables that exist, creating a new one and then seeding it with data from a JSON of the S&P500 listed companies.
            <br/>
            I had real issues getting readFile to work until I came across a GitHub thread discussing how it handles file paths. relative paths work but from the CWD, not the file the line is written in, so my numerous attempts using ../../../sANDp500.json didn’t work.
            </p>
            <br/>
            {/* video showing database reset goes here */}
            <p>Next step was adding the REST database API calls to allow data to be accessed and updated on the database. I created a function return all the symbols from the database and parse it into a neat array.</p>
            {/* i created a function image */}
            <div className="h32 sm:h-96 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/stockr/databasereset.png' alt='finnhub API' fill={true} className="object-scale-down relative"/>
            </div>
            <p>Then using this array I could call the quote on a loop. This passed all of my unit testing. However it kept running into errors when I tried to run on it on the whole S&P500. This turned out to be two main problems:</p>
            <br/>
            <ul className="list-disc list-inside pl-2 indent-4">
                {/* finnhub docs error */}
                <li>Finnhub's documentation was incorrect, the number of API calls on the free version allowed was 60 call/min not 60 calls/min. This was solved by adding a time out of 1001 to ensure it would not exceed this limit.</li>
                {/* Too many connections */}
                <li>I had set up my database patch request to create a new connection each time. This worked fine at a small scale, but tripped the limit of 5 when I tried to do 505 in the space of a few seconds.</li>
                {/* fix image */}
            </ul>
            <br/>
            <p>Lesson learned, add real stress testing into the unit-tests and I would have caught some of this much earlier.</p>
            {/* it works it running video */}
            <p>As it stands right now the system works, and takes around 10 minutes to run due to the amount of API requests it has to make and being limited to 1 a second. The video below is sped up around 20x to show it working.</p>
            {/* getting meaningful data back image */}
            <div className="h-16 sm:h-40 2xl:h-80 overflow-hidden relative box-border rounded-2xl mt-4 mb-4 sm:mt-8 sm:mb-8">
                <Image src='/images/stockr/meaningfuldataback.png' alt='finnhub API' fill={true} className="object-scale-down relative"/>
            </div>
            <h3 className="text-2xl font-bold">Future additions</h3>
            <ul className="list-disc list-inside pl-2 indent-4">
                <li>To add a dashboard interface</li>
                <li>Deploy the project</li>
                <li>Have the system automatically update itself once a day</li>
                <li>To store a log of previous days best and worst performers</li>
            </ul>
            </section>
        </>
    )
}