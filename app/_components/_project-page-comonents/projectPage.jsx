// import block
import ProjectTitle from "./projectTitle"
import ProjectButtons from "./projectButtons"
import ProjectTechStack from "./projectTechStack"

// component is to be used as a base for each project page in the portfolio, props to populate each secton
export default function ProjectPage({projectTitle, buttonLinks, techStack}) {

    return (
        <>
        < ProjectTitle  title={projectTitle}/>
        < ProjectButtons buttonLinks={buttonLinks} />
        < ProjectTechStack techStack={techStack} />
        </>
    )
}