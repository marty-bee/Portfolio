// import block

// component to return a pill containing a tech name. To be used on project pages

export default function TechStackPill({techName, colorCode}) {

    let pillColor = null;

    // switch to set color
    switch(colorCode) {
        case 'pink':
            pillColor = 'bg-pink-300'
            break;
        case 'blue':
            pillColor = 'bg-blue-300'
            break;
        case 'orange':
            pillColor = 'bg-orange-300'
            break;
        case 'yellow':
            pillColor = 'bg-yellow-300'
            break;
        default:
            break;
    }

    return (
        <p className={`m-1 sm:m-2 p-1 sm:p-2 w-20 sm:w-24 h-auto ${pillColor} rounded-full hover:scale-105 text-xs sm:text-sm font-sans font-bold dark:text-zinc-950 text-center`} >{techName}</p>
    )
}