
export default function PageComponent({title, button='', children}) {
    return(
    <>
        <header className="bg-gray-800 ">
            <div className="flex justify-between items-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-300">{title}</h1>
                {button}
            </div>
        </header>
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {children}
            </div>
        </main> 
    
    </>
    )
}