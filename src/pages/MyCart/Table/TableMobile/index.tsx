import { useCart } from '../../../../hooks/useCart'
import { currencyFormat } from '../../../../util/currencyFormat'
import { Container } from './styles'

import imgPlus from '../../../../assets/circle-plus.svg'
import imgMinus from '../../../../assets/circle-minus.svg'
import { FaTrashAlt } from 'react-icons/fa'
import { ConfirmOrder } from '../../../../components/ConfirmOrder'

export function TableMobile() {
  const { cart, removeSnackFromCart, incrementSnackFromCart, decrementSnackFromCart } = useCart()

  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.snack}-${item.id}`} className='order-item'>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button type='button' onClick={() => decrementSnackFromCart(item.id, item)}>
                  <img src={imgMinus} alt='Remover Quantidade' />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button type='button' onClick={() => incrementSnackFromCart(item.id, item)}>
                  <img src={imgPlus} alt='Adicionar Quantidade' />
                </button>
              </div>
              <button type='button'>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span>Subtotal</span> {currencyFormat(item.subtotal*item.quantity)}
            </h5>
          </div>
        </div>
      ))}
      <ConfirmOrder/>
    </Container>
  )
}
