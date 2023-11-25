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

            <div id='row1' className="flex justify-between w-full text-center p-1 sm:p-3  text-sm sm:text-xl font-sans font-bold">
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-pink-300 rounded-full' >JavaScript</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-pink-300 rounded-full' >HTML</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-pink-300 rounded-full' >CSS</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-pink-300 rounded-full' >Node</p>
                <p className='p-2 sm:p-3 sn:w-48 h-auto bg-pink-300 rounded-full' >TypeScript</p>
            </div>

            <div id='row2' className="flex justify-between w-full text-center p-1 sm:p-3 pl-4 pr-4 sm:pl-24 sm:pr-24 text-sm sm:text-xl font-sans font-bold">
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-blue-300 rounded-full' >React</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-blue-300 rounded-full' >NextJS</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-blue-300 rounded-full' >Tailwind</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-blue-300 rounded-full' >PostgreSQL</p>
            </div>

            <div id='row3' className="flex justify-between w-full text-center p-1 sm:p-3 text-sm sm:text-xl font-sans font-bold">
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full' >SQL</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full' >Netlify</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full' >PlayWright</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full' >Vitest</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-orange-300 rounded-full' >REST API</p>
            </div>

            <div id='row4' className="flex justify-between w-full text-center p-1 sm:p-3 pl-4 pr-4 sm:pl-24 sm:pr-24 text-sm sm:text-xl font-sans font-bold">
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-yellow-400 rounded-full' >Figma</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-yellow-400 rounded-full' >Git</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-yellow-400 rounded-full' >GitHub</p>
                <p className='p-2 sm:p-3 sm:w-48 h-auto bg-yellow-400 rounded-full' >Express</p>
            </div>
        </div>
    </>
    )

}