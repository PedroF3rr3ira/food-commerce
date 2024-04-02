import { useCart } from '../../../hooks/useCart'
import { currencyFormat } from '../../../util/currencyFormat'
import { Container } from '../styles'

export function PayOrder() {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal*(item.quantity*1)), 0)
  console.log(cart)
  return (
    <Container>
      <button type='submit'>Pagar</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
