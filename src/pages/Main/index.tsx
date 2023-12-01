import { Container } from './styles'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar/>
      <section>
        <img src={logoImg} alt="logo" />
        <Outlet/>
      </section>
    </Container>
  )
}
