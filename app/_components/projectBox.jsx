// import block

import ProjectCard from "./projectCard";

// This component holds all of the project cards, allows the page to scale as more projects get added to the portfolio

// state is used to generate the cards
export default function ProjectBox(){

    // project card generation

    // Return component
    return (
        <>
        <div id='ProjectContainer' className="flex flex-col items-center ml-20 mr-20 pt-10">
            {/* < ProjectCard /> */}
            < ProjectCard />

        </div>
        </>
    )

}