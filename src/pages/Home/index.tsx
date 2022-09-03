import { useSetPageTitle } from 'hooks'
import * as S from './styles'

const Home = () => {
  useSetPageTitle({ pageTitle: 'Home' })

  return (
    <S.Container>
      <h1>Hello World!</h1>
    </S.Container>
  )
}

export default Home
