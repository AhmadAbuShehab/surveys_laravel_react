import { Link } from "react-router-dom" 


export  default function TButton({
    colo= 'indigo',
    to= '',
    href= '',
    circle= false,
    link= false,
    tergate= '_blank',
}) {
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click Me
        </button>
    )
}