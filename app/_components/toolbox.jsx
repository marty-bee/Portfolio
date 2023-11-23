// import block
import ProjectCard from "./projectCard"; // project card component
import { uuid } from "uuidv4";// uuid to create unique keys's for each project card (react requirement to track the DOM)

// This component holds all of the toolbox icons, allows the page to scale as more tools get added to the portfolio

// state is used to generate the cards
export default function Toolbox({toolsArray}){

    // Return component
    return (
        <>
        {/* defining the styling and the grid layout rows alternate between 4 and 5 items starting at row 1 with 4 */}
        <div id='toolboxContainer' className="flex flex-col items-center pl-40 pr-40 pt-10">
            <h1 className="text-6xl font-sans font-bold text-center mt-20">Toolbox</h1>
            {/* < toolIcon generation from a map /> */}
            {/* {projectsArray.map((currentTool) => { */}
                {/* // creating the icon */}
                {/* return ( */}
                    {/* <toolIcon key={uuid()} tool={currentTool} /> */}
                {/* ) */}
            {/* })} */}

        </div>
        </>
    )

}