// import block


// component to set consistent styling for the title of each project page.
// props needed are the project title

export default function ProjectTitle({title}) {
    //
    return (
        <>
        <div>
            <h1 className='font-sans text-5xl sm:text-8xl font-bold text-center pr-4 mt-20'>
                {title}
            </h1>
        </div>
        </>
    )
}