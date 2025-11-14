import { Link } from "react-router-dom" 


export  default function TButton({
    colo= 'indigo',
    to= '',
    href= '',
    circle= false,
    link= false,
    tergate= '_blank',
    onClick= () => {},
    children,
}) {
    let classes = [
        "flex",
        "whitespace-nowrap",
        "text-sm",
        "border",
        "border-transparent",
        "border-2"
    ];

    if (link){
        classes = [
            ...classes,
            "transition-colors",
        ];
        switch (colo) {
            case "indigo":
                classes = [
                    ...classes,
                    "text-indigo-500",
                    "fous:text-indigo-500",
                ];
                break;
            case "red":
                classes = [
                    ...classes,
                    "text-red-500",
                    "fous:text-red-500",
                ];
                break;
    }}else {
        classes = [
            ...classes,
            "text-white",
            "foucus:ring-2",
            "foucus:ring-offset-2",
        ];
        switch (colo) {
            case "indigo":
                classes = [
                    ...classes,
                    "bg-indigo-600",
                    "hover:bg-indigo-700",
                ];
                break;
            case "red":
                classes = [
                    ...classes,
                    "bg-red-600",
                    "hover:bg-red-700",
                    "foucus:ring-red-500", 
                ];
                break;
                case "green":
                classes = [
                    ...classes,
                    "bg-emerald-500",
                    "hover:bg-emerald-600",
                    "foucus:ring-emerald-400", 
                ];
                break;
        }

    }

    if (circle){
        classes = [
            ...classes,
            "h-8",
            "w-8",
            "items-center",
            "justify-center",
            "rounded-full",
            "text-sm",
        ];
    } else {
        classes = [
            ...classes,
            "px-4",
            "py-2",
            "rounded-md",
        ];
    }


    return(
        <>
            {href && (
                <a 
                    href={href} className={classes.join(" ")} target={tergate}>
                    {children}
                </a>)}
            {to && (
                <Link to={to} className={classes.join(" ")}>
                    {children}
                </Link>
            )}
            {!to && !href && (
                <button onClick={onClick} className={classes.join(" ")}>
                    {children}
                </button>
            )}
        </>
    )
}