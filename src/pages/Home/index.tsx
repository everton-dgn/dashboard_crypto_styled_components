import { useSetPageTitle } from 'hooks'
import * as S from './styles'
import * as C from 'components'
import nft from 'assets/images/nft.webp'
import { CRYPTO_DATA, USER_DATA, QUICK_TRANSFER_DATA, CHART_DATA } from './data'

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
        {CRYPTO_DATA.slice(0, 2).map(cryptoData => (
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
        <C.QuickTransfer quickTransferData={QUICK_TRANSFER_DATA} />
        <C.SemesterChart chartData={CHART_DATA} />
      </S.SecondaryLayout>
    </S.Container>
  )
}

export default Home
