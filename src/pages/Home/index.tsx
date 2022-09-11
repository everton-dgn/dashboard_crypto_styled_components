import { useSetPageTitle } from 'hooks'
import * as S from './styles'
import * as C from 'components'
import nft from 'assets/images/nft.webp'
import {
  CHART_DATA,
  CRYPTO_DATA,
  QUICK_TRANSFER_DATA,
  USER_DATA
} from 'fakeApi'

const Home = () => {
  useSetPageTitle({ pageTitle: 'Home' })

  return (
    <S.Container>
      <S.MainLayout>
        <C.MainBanner srcImage={nft} altDescription="NFT" />
        <C.LastBuy dataLastBuy={CRYPTO_DATA} />
        <S.WrapperCharts>
          <C.StatisticsChart chartData={CHART_DATA} />
          <C.AnalyticsChart dataAnalytics={CRYPTO_DATA} />
        </S.WrapperCharts>
        {CRYPTO_DATA.map(cryptoData => (
          <C.CryptocurrencyDataBalanceBox
            key={cryptoData.name}
            cryptocurrencyDataBalance={cryptoData}
          />
        ))}
      </S.MainLayout>
      <S.SecondaryLayout>
        <C.UserProfile userData={USER_DATA} />
        <C.Wallets
          name={USER_DATA.name}
          wallet={USER_DATA.wallet}
          flagLogo={USER_DATA.flagLogo}
        />
        <C.QuickTransfer
          initialState={3}
          increment={3}
          quickTransferData={QUICK_TRANSFER_DATA}
        />
        <C.SemesterChart chartData={CHART_DATA} />
      </S.SecondaryLayout>
    </S.Container>
  )
}

export default Home
