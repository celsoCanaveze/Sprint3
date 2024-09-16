interface CardIntegrantesProps{
    name: string
    github: string
    imagem: string
    rm: string
}

export function CardIntegrantes({name,github,imagem,rm}: CardIntegrantesProps){
    return(
        <div className="flex flex-row items-center gap-4 text-lg bg-zinc-800 rounded border border-zinc-200 p-5 w-full lg:w-[800px] justify-between">
            <img src= {imagem} alt="" className="size-28 lg:size-52 rounded-full"/>
            <aside className="flex flex-col gap-4">
                <h1>{name} </h1>
                <h1>RM: {rm}</h1>
                <a target="_blank" href={github} className="px-4 py-2 bg-blue-500 rounded text-center hover:bg-blue-600 duration-200">Veja meu github</a>
            </aside>
        </div>
    )
}
