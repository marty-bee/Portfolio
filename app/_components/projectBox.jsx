// import block
import ProjectCard from "./projectCard"; // project card component
import { uuid } from "uuidv4";// uuid to create unique keys's for each project card (react requirement to track the DOM)

// This component holds all of the project cards, allows the page to scale as more projects get added to the portfolio

// state is used to generate the cards
export default function ProjectBox({projectsArray}){

    // project card generation

    // Return component
    return (
        <>
        <div id='ProjectContainer' className="flex flex-col items-center pt-10">
            {/* < ProjectCard generation from a map /> */}
            {projectsArray.map((currentProject) => {
                // creating the card
                return (
                    <ProjectCard key={uuid()} projectObj={currentProject} />
                )
            })}

        </div>
        </>
    )

}