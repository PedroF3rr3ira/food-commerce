import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { useSnack } from '../../../hooks/useSnack'

export default function Burger() {
  const {burgers} = useSnack()

  return (
    <>
      <Head title='Hambúrgueres' />
      <Snacks snacks={burgers}/>
    </>
  )
}
