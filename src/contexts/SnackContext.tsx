import { SnackData } from "../interfaces/SnackData"
import { ReactNode, useState, useEffect,createContext } from "react"
import { getBurgers } from "../services/api"

interface SnackContextProps {
  burgers: SnackData[]
  // pizzas: SnackData[]
  // drinks: SnackData[]
  // icecreams: SnackData[]
}
interface SnackProviderProps{
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({children}:SnackProviderProps){
  const [burgers,setBurgers] = useState<SnackData[]>([])
  const [pizzas,setPizzas] = useState<SnackData[]>([])
  const [drinks,setDrinks] = useState<SnackData[]>([])
  const [icecreams,setIcecreams] = useState<SnackData[]>([])

  useEffect(()=>{
    (async ()=> {
      try{
        const burgerRequest = await getBurgers();

        const requests = [burgerRequest]
        const [{data:burgerResponse}] = await Promise.all(requests)

        setBurgers(burgerResponse)
      }catch(error){
        console.error(error)
      }
    })()
  },[])

  return (
    <SnackContext.Provider value={{burgers}}>
      {children}
    </SnackContext.Provider>
  )
}
