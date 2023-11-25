'use client'
// import block
import { useScroller, scroller } from '../_customHooks/useScroll'

// This component contains the navigation bar and all the links as part of it
export default function Navbar() {
    // // using the custom hook and scroller fucntion
    // const workRef = useRef(null);
    // const aboutRef = useRef(null);
    // const contactRef = useRef(null);
  
    // // Use the useScroller hook for each section
    // const { targetElementRef: workTargetRef, scroller: workScroller } = useScroller();
    // const { targetElementRef: aboutTargetRef, scroller: aboutScroller } = useScroller();
    // const { targetElementRef: contactTargetRef, scroller: contactScroller } = useScroller();
  
    // // Set the refs to the corresponding section refs
    // useEffect(() => {
    //   workTargetRef.current = workRef.current;
    //   aboutTargetRef.current = aboutRef.current;
    //   contactTargetRef.current = contactRef.current;
    // }, [workRef, aboutRef, contactRef, workTargetRef, aboutTargetRef, contactTargetRef]);
    // // return
    // function to for the toggle switch

    return (
        <>
            <nav className="flex font-sans text-right p-4 md:text-xl w-full justify-between sm:justify-end">
                <button className="font-sans sm:pr-20">Work</button>
                <button className="font-sans sm:pr-20">About</button>
                <button className="font-sans sm:pr-20">Contact</button>
                <button className="font-sans sm:pr-20">CV</button>
                {/* button to toggle dark/light theme */}
                <button className='font-sans sm:pr-4'>Theme</button>
            </nav>
        </>
    )
}
