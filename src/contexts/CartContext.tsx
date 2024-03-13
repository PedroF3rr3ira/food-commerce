import { createContext, ReactNode, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveSnackFromCart {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (id: number, snack: Snack) => void
  decrementSnackFromCart: (id: number, snack: Snack) => void
  incrementSnackFromCart: (id: number, snack: Snack) => void
  // confirmOrder: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    const snackExists = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

    if (snackExists) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.quantity * item.price
          return { ...item, quantity, subtotal }
        }
        return item
      })
      toast.success(`Outro(a) ${snack.snack} ${snack.name} adicionado nos pedidos`)
      setCart(newCart)
      return
    }

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack]

    toast.success(`${snack.snack} ${snack.name} adicionado nos pedidos`)

    setCart(newCart)
  }

  function removeSnackFromCart(id: number, snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === id && item.snack === snack.snack))
    setCart(newCart)
  }

  function updateSnackQuantity(id: number, snack: Snack, quantity: number) {
    const newCart = cart.map((item) => {
      if (item.id === id && item.snack === snack.snack) {
        item.quantity = quantity
      }
      return item
    })
    setCart(newCart)
  }

  function decrementSnackFromCart(id: number, snack: Snack) {
    if (snack.quantity > 1) updateSnackQuantity(id, snack, snack.quantity-1)
  }
  function incrementSnackFromCart(id: number, snack: Snack) {
    updateSnackQuantity(id, snack, snack.quantity+1)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        decrementSnackFromCart,
        incrementSnackFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
