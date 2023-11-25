// import block
import Image from "next/image"

// this component contains a form to contact me and other links incase they want to use them to get in touch with me

export default function AboutMe() {
    //


    // Return box
    return (
        <>
            <h1 className="text-3xl sm:text-6xl font-sans font-bold text-center mt-20 pb-4">About me</h1>
            <div className="flex flex-row">
                {/* <Image src='/images/me.jpg' alt='Me and my dog Natsu' height={250} width={300} quality={75} className="relative object-cover rounded-3xl pr-4"/> */}
            <div className="text-sm sm:text-base font-sans sm:columns-2 sm:gap-4 justify-normal">
                <p>
                Hi, I'm Martyn, a passionate creator of all things. Originally, my dream was to become a chef, finding joy in crafting things that bring happiness, like cakes.
                </p>
                <br />
                <p>During a brief stint in catering as a teenager, I realized my desire to be a chef was more about the scale of impact. The business I worked for could serve 500 people on a good weekend, but compared to McDonald's delivering 69 million moments of happiness daily, it practically didn't exist.</p>
                <br />
                <p>
                This led me to industrial design, a well-designed and crafted product can create thousands of happy moments over many years. Always striving for a larger scale, I delved into UX design, working towards delivering the 'wonderful everyday'.
                </p>
                <br />
                <p>
                It was during this journey that I discovered my true passion lies in the act of making. Development and coding scratches that itch for me. I thrive on lifelong learning and have a deep-seated passion for technology.
                </p>
                <br />
                <p>
                I've worked with companies of all sizes, from startups to established businesses, showcasing a proven track record in creative solutions and project delivery.
                </p>
                <br />
                <p>
                My diverse background includes roles such as UX Designer, Design Engineer, Research Consultant, Toy Designer, and Lighting Designer. This varied experience has equipped me with the skills to quickly adapt to any stack, tools, stakeholders, clients, or users' needs.
                </p>
                <br />
                <p>
                Always eager to acquire new skills and broaden my understanding in all aspects of work and life, I am highly adaptable to any tools, methods, or software. I get things done.
                </p>
                <br />
            </div>
            </div>
        </>
    )
}