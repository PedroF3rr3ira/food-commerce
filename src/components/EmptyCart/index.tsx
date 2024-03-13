import { Button, Container } from "./styles";

import manAndBurguer from '../../assets/man-and-burger.svg'

interface EmptyCartProps {
  title: string
}

export function EmptyCart({title}:EmptyCartProps){
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar cardápio</Button>
      <img src={manAndBurguer} alt="Homem com hamburguer" />
    </Container>
  );
}
