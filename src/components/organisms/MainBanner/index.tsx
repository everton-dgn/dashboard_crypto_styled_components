import * as S from './styles'
import * as C from 'components'
import { MainBannerProps } from './types'
import T from 'theme'
import { useRenderingByWindowSize } from 'hooks'

const MainBanner = ({ srcImage, altDescription }: MainBannerProps) => {
  const { windowSize } = useRenderingByWindowSize()
  const calculatesImageOpacity = (): number => {
    return windowSize.custom(1290) ? 1 : 0.2
  }

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

      <S.ImageNft
        opacity={calculatesImageOpacity()}
        width={412}
        height={262}
        src={srcImage}
        alt={altDescription}
      />
    </S.Container>
  )
}

export default MainBanner
