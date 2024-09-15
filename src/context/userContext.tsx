import { createContext, ReactNode, useContext, useState } from "react"
import { Accounts } from "../configurations/accounts"

interface Account {
    name: string,
    email: string,
    password: string,
    car: string,
    carImg: string,
    year: string,
    model: string
    security: string
}

interface AuthContextType {
    user: Account | null
    userIsLogged: boolean // se ta logado (true) senao (false)
    login: (email : string, password: string) => boolean
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider')
    }

    return context
}

export const AuthProvider = ({children} : {children : ReactNode}) => {
    const [user, setUser] = useState<Account | null>(null)
    const [userIsLogged, setUserIsLogged] = useState(false)

    const login = (email: string, passowrd: string): boolean => {
        const account = Accounts.find(
            (acc) => acc.email === email && acc.password === passowrd
        )

        if(account) {
            setUser(account)
            setUserIsLogged(true)
            return true
        }else {
            return false
        }
    }   

    const logout = () => {
        setUser(null)
        setUserIsLogged(false)
    }

    return (
        <AuthContext.Provider value={{user, userIsLogged, login, logout}}>
            {children}

        </AuthContext.Provider>

    )
}