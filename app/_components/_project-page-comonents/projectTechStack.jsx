// import block
import TechStackPill from "./techStackPill"; // tech stack pill component
import { v4 as uuid } from "uuid"; // uuid to create unique keys for each project card (react requirement to track the DOM)

// component to render buttons with link(s) to the project's GitHub repo and live deployment if applicable
export default function ProjectTechStack({ techStack }) {
  // return block
  return (
    <>
      <h2 className="font-sans text-1xl sm:text-4xl font-bold text-center mt-4">Tech Stack</h2>
      <div id="techStackContainer" className="flex flex-wrap pb-1 sm:pb-4 mb-1 md:pl-40 md:pr-40 w-full 2xl:w-2/5 2xl:m-auto 2xl:items-center">
        {/* toolbox pills generated from map */}
        {techStack.map((currentTool) => (
          // creating the pill
          <TechStackPill
            key={uuid()}
            colorCode={currentTool.colorCode}
            techName={currentTool.techname} // fix the property name here
          />
        ))}
      </div>
    </>
  );
}
