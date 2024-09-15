import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

export function CallMechanicModal(){
    const [isOpenModal, setIsOpenModal] = useState(false)
    function HandleCallMechanic(){
        alert('Você chamou o mecanico, em alguns instantes entraremos em contato.')
        setIsOpenModal (false)
    }
    return(
        <Dialog.Root onOpenChange={setIsOpenModal} open={isOpenModal}>
            <Dialog.Trigger asChild>
                <button className="group px-4 py-2 border border-sky-500 rounded bg-sky-400 hover:bg-sky-500 duration-200 ml-6">
                    <span className="group-hover:text-sky-900">Chamar um mecânico</span>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='bg-overlay fixed inset-0'/>
                <Dialog.Content className='fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
                    <Dialog.Title className='text-xl font-bold'>
                        Chame um mecânico
                    </Dialog.Title>
                    <Dialog.Description className='text-lg mt-2 text-zinc-500'>
                        Digite seu problema que informaremos um mecânico
                    </Dialog.Description>
                    <fieldset className='mt-2'>
                        <label htmlFor="call" className='text-lg'>Descreva seu problema:</label>
                        <textarea 
                            name="call" 
                            id="call"
                            className='w-full p-2 outline-none border border-blue-500 rounded h-[200px] mt-2'
                        ></textarea>
                    </fieldset>
                    <div className='flex w-full justify-between gap-2 mt-4'>
                        <Dialog.Close className='w-full p-2 bg-red-500 rounded hover:bg-red-600 duration-200'>
                            Fechar
                        </Dialog.Close>
                        <button 
                            className='w-full p-2 bg-green-500 rounded hover:bg-green-600 duration-200' 
                            onClick={HandleCallMechanic} 
                            >
                                Enviar
                        </button>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}