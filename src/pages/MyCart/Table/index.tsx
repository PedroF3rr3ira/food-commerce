import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";

import { TableDesktop } from "./TableDesktop";
import { TableMobile } from "./TableMobile";
import { EmptyCart } from "../../../components/EmptyCart";

export function Table(){
  const {cart} = useCart();

  const [windowSize,setWindowSize] = useState(document.documentElement.clientWidth);

  useEffect(()=>{
    function updateTableComponentWidth(){
      setWindowSize(document.documentElement.clientWidth)
    }
    window.addEventListener('resize',updateTableComponentWidth)

    return ()=>{
      window.removeEventListener('resize',updateTableComponentWidth)
    }
  },[])

  if(cart.length===0)return <EmptyCart title="Ops! Parece que você ainda não fez nenhum pedido"/>

  return windowSize >768? <TableDesktop/>:<TableMobile/>
}
