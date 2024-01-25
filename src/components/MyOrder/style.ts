import { Link } from "react-router-dom";
import styled from 'styled-components'
import { darken } from "polished";

export const Container = styled(Link)`
  position:absolute;
  right:1.5rem;
  bottom: 0.5rem;

  background: ${({theme})=> theme.colors.red};
  padding:.5rem 1rem;
  border-radius:.5rem;

  display:flex;
  align-items: center;

  transition: background .3s;

  &:hover{
    background:${darken(.1,"#AA2424")};
  }
  span:first-child{
    margin-right:.25rem;
    font-weight: 500;
    font-size:1rem
  }

  svg{
    fill:${({theme}) => theme.colors.white};
    width:2rem;
    height:2rem;
  }

  span:last-child{
    margin-left:.75rem;
    font-weight:500;
    font-size:1.5rem;
    color:${({theme})=> theme.colors.yellow}
  }

  @media (max-width:720px){
    top: .5rem;
    bottom:initial;

    span:first-child{
      display:none;
    }
  }

`
