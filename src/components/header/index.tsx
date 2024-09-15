import { useState } from "react";
import { useAuth } from "../../context/userContext";
import { LoginModal } from "../modal/login-modal";

import {Menu} from 'lucide-react'

export function Header () {
    const {logout, userIsLogged} = useAuth()
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <header className="sm:hidden flex flex-row w-full justify-between h-header p-2 items-center border-b border-zinc-400 text-white">
                <img src="/Porto.png" alt="" className="w-[120px]"/>
                <button onClick={() => setIsModalOpen(true)}>
                    <Menu className="size-6"/>
                </button>

                {isModalOpen
                ?
                    <div className="fixed inset-0 bg-zinc-900 p-2">
                        <div className="flex flex-col gap-2">
                            <a href="#inital" className=" hover:text-sky-500 text-bold text-lg duration-200">
                                Inicial
                            </a>

                            {userIsLogged 
                                ? 
                                <a  href="#call" className=" hover:text-sky-500 text-bold text-lg duration-200">
                                    Chamar Mecanico
                                </a>
                                :
                                <></>
                            }
                            <a href="#integrantes" className="hover:text-sky-500 text-bold text-lg duration-200">
                                Integrantes
                            </a>

                            {userIsLogged 
                            ? 
                                <button 
                                    onClick={logout}
                                    className="px-4 py-2 border border-red-500 rounded bg-red-400 hover:bg-red-500 duration-200 ml-6"
                                >
                                    Logout
                                </button> 
                            :   
                                <div className="w-[130px]">   
                                    <LoginModal/>
                                </div>
                            }
                            <button onClick={() => setIsModalOpen(false)}>Fechar</button>
                        </div>
                    </div>

                    :
                    <></>
                }
            </header>

            <header className="hidden sm:flex flex-row w-full justify-between h-header p-2 items-center border-b border-zinc-400 text-white">
                <img src="/Porto.png" alt="" className="w-[120px]"/>

                <div className="flex flex-row gap-5">
                    <a href="#inital" className=" hover:text-sky-500 text-bold text-lg duration-200">
                        Inicial
                    </a>

                    {userIsLogged 
                    ? 
                    <a  href="#call" className=" hover:text-sky-500 text-bold text-lg duration-200">
                        Chamar Mecanico
                    </a>
                    :
                    <></>
                }

                    
                    <a href="#integrantes" className="hover:text-sky-500 text-bold text-lg duration-200">
                        Integrantes
                    </a>
                </div>
                {userIsLogged 
                ? 
                    <button 
                        onClick={logout}
                        className="px-4 py-2 border border-red-500 rounded bg-red-400 hover:bg-red-500 duration-200 ml-6"
                    >
                        Logout
                    </button> 
                :   
                    <div className="w-[130px]">   
                        <LoginModal/>
                    </div>
                }
            </header>
        </>
    )
}