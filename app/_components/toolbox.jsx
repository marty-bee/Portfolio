// import block


// This component holds all of the toolbox icons, allows the page to scale as more tools get added to the portfolio

// state is used to generate the cards
export default function Toolbox(){

    // Return component
    return (
        <>
        <div id='toolboxContainer' className="flex flex-col items-center w-full">
            <h1 className="text-3xl sm:text-6xl font-sans font-bold text-center mt-20 pb-4">Toolbox</h1>
        {/* defining the styling and the grid layout rows alternate between 4 and 5 items starting at row 1 with 4 */}

            <div id='row1' className="flex justify-between w-full text-center p-1 sm:p-3  text-sm sm:text-xl font-sans font-bold dark:text-zinc-950">
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-pink-300 rounded-full hover:scale-105' >JavaScript</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-pink-300 rounded-full hover:scale-105' >HTML</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-pink-300 rounded-full hover:scale-105' >CSS</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-pink-300 rounded-full hover:scale-105' >Node</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-pink-300 rounded-full hover:scale-105' >TypeScript</p>
            </div>

            <div id='row2' className="flex justify-between w-full text-center p-1 sm:p-3 pl-4 pr-4 sm:pl-24 sm:pr-24 text-sm sm:text-xl font-sans font-bold dark:text-zinc-950">
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-blue-300 rounded-full hover:scale-105' >React</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-blue-300 rounded-full hover:scale-105' >NextJS</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-blue-300 rounded-full hover:scale-105' >Tailwind</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-blue-300 rounded-full hover:scale-105' >PostgreSQL</p>
            </div>

            <div id='row3' className="flex justify-between w-full text-center p-1 sm:p-3 text-sm sm:text-xl font-sans font-bold dark:text-zinc-950">
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full hover:scale-105' >SQL</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full hover:scale-105' >Netlify</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full hover:scale-105' >PlayWright</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full hover:scale-105' >Vitest</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full hover:scale-105' >REST API</p>
            </div>

            <div id='row4' className="flex justify-between w-full text-center p-1 sm:p-3 pl-4 pr-4 sm:pl-24 sm:pr-24 text-sm sm:text-xl font-sans font-bold dark:text-zinc-950">
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-yellow-400 rounded-full hover:scale-105' >Figma</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-yellow-400 rounded-full hover:scale-105' >Git</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-yellow-400 rounded-full hover:scale-105' >GitHub</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-yellow-400 rounded-full hover:scale-105' >Express</p>
            </div>
        </div>
    </>
    )

}