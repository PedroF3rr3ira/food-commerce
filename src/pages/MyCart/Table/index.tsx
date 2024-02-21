import { useCart } from "../../../hooks/useCart";

import { TableDesktop } from "./TableDesktop";

export function Table(){
  const {cart} = useCart();

  if(cart.length===0)return<h1>Ops! Parece que você ainda não fez nenhum pedido</h1>

  return <TableDesktop/>
}
