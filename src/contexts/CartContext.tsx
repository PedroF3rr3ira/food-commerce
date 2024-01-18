import {createContext, ReactNode, useState} from 'react'
import { SnackData } from "../interfaces/SnackData";


interface Snack extends SnackData{
  quantity:number;
  subtotal:number
}

interface RemoveSnackFromCart{
  id:number;
  snack:string;
}

interface UpdateCartProps {
  id:number;
  snack:string;
  newQuantity:number
}

interface CartContextProps {
  cart: Snack[];
  addSnackIntoCart:(snack:SnackData)=> void;
  // removeSnackFromCart:({id,snack}:RemoveSnackFromCart)=>void
  // updateCart:({id,snack,newQuantity}:UpdateCartProps)=> void;
}

interface CartProviderProps{
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({children}:CartProviderProps){
  const [cart,setCart] = useState<Snack[]>([]);

  function addSnackIntoCart(snack:SnackData):void{

    const snackExists = cart.find((item)=> item.snack === snack.snack && item.id === snack.id)

    if(snackExists){
      const newCart = cart.map((item)=>{
        if(item.id ===snack.id){
          const quantity = item.quantity+1;
          const subtotal = item.quantity*item.price;
          return {...item, quantity,subtotal}
        }
        return item
      })
      setCart(newCart)
      return;
    }
    console.log("cheguei aqui")

    const newSnack = {...snack, quantity:1, subtotal: snack.price}
    const newCart = [...cart, newSnack]

    console.log(`newCart`,newCart)

    setCart(newCart)
  }

  return <CartContext.Provider value={{cart,addSnackIntoCart}}>
    {children}
  </CartContext.Provider>
}
