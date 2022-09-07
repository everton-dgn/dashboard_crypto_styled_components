import * as S from './styles'
import * as C from 'components'
import { MainBannerProps } from './types'
import T from 'theme'

const MainBanner = ({ srcImage, altDescription }: MainBannerProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <C.SearchBar placeholder="Search" ariaLabel="Search" />

        <S.WrapperText>
          <C.Typography
            text="EARNING WITH NFT TODAY"
            type="text1"
            as="h1"
            weight={500}
            color={T.colors.white}
          />

          <S.WrapperSubtitle>
            <C.Typography
              text="+134 000 Users"
              type="text5"
              as="h2"
              weight={500}
              color={T.colors.primary}
            />
            <C.Typography
              text="+245 122 Auction"
              type="text5"
              as="h2"
              weight={500}
              color={T.colors.primary}
            />
          </S.WrapperSubtitle>
        </S.WrapperText>

        <C.Button text="Start Earning" size="large" color="primary" />
      </S.Wrapper>

      <S.ImageNft src={srcImage} alt={altDescription} />
    </S.Container>
  )
}

export default MainBanner
