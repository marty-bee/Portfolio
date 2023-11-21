// import block


// This component shows the main title on the home page of the portofolio

export default function Titler() {

    return (
        <>
            <div id='centering' className="flex flex-row justify-center pt-36">
                <div id='titleBox' className="items-center justify-center w-2/5" >
                    <h1 className='font-sans text-8xl font-bold text-left pr-4'>Martyn</h1>
                    <h1 className="font-sans text-8xl font-bold text-right pl-4
                    bg-pink-400 mt-2">Billings</h1>
                    <div className="font-sans text-4xl text-justify flex justify-between mt-1">
                    {/* This is to do even spacing across the width of the div, it's less clunky than doing a text spacing value */}
                    <p>F</p>
                    <p>u</p>
                    <p>l</p>
                    <p>l</p>
                    <p> </p>
                    <p>S</p>
                    <p>t</p>
                    <p>a</p>
                    <p>c</p>
                    <p>k</p>
                    <p> </p>
                    <p>D</p>
                    <p>e</p>
                    <p>v</p>
                    <p>e</p>
                    <p>l</p>
                    <p>o</p>
                    <p>p</p>
                    <p>e</p>
                    <p>r</p>
                    </div>
                </div>
            </div>
        </>
    )
}