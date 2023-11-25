// import block


// This component shows the main title on the home page of the portofolio

export default function Titler() {

    return (
        <>
            <div id='centering' className="flex flex-row justify-center pt-40 pb-36 sm:pb-40 w-full">
                <div id='titleBox' className="items-center justify-center w-full md:w-3/5 pl-4 pr-4" >
                    <h1 className='font-sans text-5xl sm:text-8xl font-bold text-left pr-4'>Martyn</h1>
                    <h1 className="font-sans text-5xl sm:text-8xl font-bold text-right pl-4
                    bg-pink-400 mt-2">Billings</h1>
                    <div className="font-sans text-xl md:text-4xl text-justify flex justify-between mt-1" aria-label="Full Stack Developer">
                    {/* This is to do even spacing across the width of the div, it's less clunky than doing a text spacing value */}
                    <p aria-hidden='true'>F</p>
                    <p aria-hidden='true'>u</p>
                    <p aria-hidden='true'>l</p>
                    <p aria-hidden='true'>l</p>
                    <p aria-hidden='true'> </p>
                    <p aria-hidden='true'>S</p>
                    <p aria-hidden='true'>t</p>
                    <p aria-hidden='true'>a</p>
                    <p aria-hidden='true'>c</p>
                    <p aria-hidden='true'>k</p>
                    <p aria-hidden='true'> </p>
                    <p aria-hidden='true'>D</p>
                    <p aria-hidden='true'>e</p>
                    <p aria-hidden='true'>v</p>
                    <p aria-hidden='true'>e</p>
                    <p aria-hidden='true'>l</p>
                    <p aria-hidden='true'>o</p>
                    <p aria-hidden='true'>p</p>
                    <p aria-hidden='true'>e</p>
                    <p aria-hidden='true'>r</p>
                    </div>
                </div>
            </div>
        </>
    )
}