import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgerPage from './pages/Main/Burger'
import PizzaPage from './pages/Main/Pizza'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgerPage />}/>
        <Route path='pizza' element={<PizzaPage />}/>

      </Route>
    </Routes>
  )
}
