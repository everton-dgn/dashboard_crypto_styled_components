import { useSetPageTitle } from 'hooks'
import * as S from './styles'
import * as C from 'components'
import nft from 'assets/images/nft.webp'
import { DATA_CRYPTO } from './data'

const Home = () => {
  useSetPageTitle({ pageTitle: 'Home' })

  return (
    <S.Container>
      <S.MainLayout>
        <C.MainBanner srcImage={nft} altDescription="NFT" />
        <C.LastBuy dataLastBuy={DATA_CRYPTO} />
        <S.WrapperCharts>
          <C.StatisticsChart />
          <C.AnalyticsChart dataAnalytics={DATA_CRYPTO} />
        </S.WrapperCharts>
        {DATA_CRYPTO.slice(0, 2).map(dataCrypto => (
          <C.CryptocurrencyDataBalanceBox
            key={dataCrypto.name}
            cryptocurrencyDataBalance={dataCrypto}
          />
        ))}
      </S.MainLayout>
      <S.SecondaryLayout>SecondaryLayout</S.SecondaryLayout>
    </S.Container>
  )
}

export default Home
