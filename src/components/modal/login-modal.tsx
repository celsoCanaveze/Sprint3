import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { useAuth } from '../../context/userContext';

export function LoginModal(){
    const {login} = useAuth()
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    function handleLogin() {
        const handleUserLogin = login(userEmail, userPassword)

        if(handleUserLogin) {
            alert('Login bem sucessido!')
        }else {
            alert('Email ou senha incorreta!')
        }
    }


    return(
        <Dialog.Root onOpenChange={setIsOpenModal} open={isOpenModal}>
            <Dialog.Trigger asChild>
                <button className="group px-4 py-2 border border-sky-500 rounded bg-sky-400 hover:bg-sky-500 duration-200 ml-6">
                    <span className="group-hover:text-sky-900">Login</span>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='bg-overlay fixed inset-0'/>
                <Dialog.Content className='fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
                    <Dialog.Title className='text-xl font-bold'>
                        Login
                    </Dialog.Title>
                    <Dialog.Description className='text-lg text-zinc-500'>
                        Digite o email e a senha para logar na plataforma
                    </Dialog.Description>
                    <fieldset className='mt-2'>
                        <label htmlFor="email" className='focus:outline-none'>Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            className='w-full p-2 border border-blue-500 rounded outline-none focus:border-blue-800' 
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className='mt-2'>
                        <label htmlFor="password">Senha</label>
                        <input 
                            type="password" 
                            id="password" 
                            className='w-full p-2 border rounded border-blue-500 outline-none focus:border-blue-800'
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                    </fieldset>
                    <div className='flex w-full justify-between gap-2 mt-4'>
                        <Dialog.Close className='w-full p-2 bg-red-500 rounded hover:bg-red-600 duration-200'>
                            Fechar
                        </Dialog.Close>
                        <button 
                            className='w-full p-2 bg-green-500 rounded hover:bg-green-600 duration-200' 
                            onClick={handleLogin}>
                                Entrar
                        </button>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}