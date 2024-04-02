import { useCart } from '../../../../hooks/useCart'
import { currencyFormat } from '../../../../util/currencyFormat'
import { Container } from './styles'

import imgPlus from '../../../../assets/circle-plus.svg'
import imgMinus from '../../../../assets/circle-minus.svg'

import { FaTrashAlt } from 'react-icons/fa'
import { ConfirmOrder } from '../../../../components/OrderCloseAction/ConfirmOrder'

export function TableDesktop() {
  const { cart, removeSnackFromCart, incrementSnackFromCart, decrementSnackFromCart } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => decrementSnackFromCart(item.id, item)}>
                    <img src={imgMinus} alt='Decrementar quantidade' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => incrementSnackFromCart(item.id, item)}>
                    <img src={imgPlus} alt='Incrementar quantidade' />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal * item.quantity)}</h5>
              </td>
              <td>
                <button onClick={() => removeSnackFromCart(item.id, item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}
