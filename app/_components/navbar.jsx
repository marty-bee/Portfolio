// import block

// This component contains the navigation bar and all the links as part of it
export default function Navbar() {
    // link controls

    // return
    return (
        <>
            <nav className="flex font-sans text-right p-4 md:text-xl w-full justify-between sm:justify-end">
                <button className="font-sans sm:pr-20">Work</button>
                <button className="font-sans sm:pr-20">About</button>
                <button className="font-sans sm:pr-20">Contact</button>
                <button className="font-sans sm:pr-4">CV</button>
            </nav>
        </>
    )
}
