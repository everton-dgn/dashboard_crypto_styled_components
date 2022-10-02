import { Fragment } from 'react'
import { useTranslator } from 'translations'
import * as S from './styles'
import * as C from 'components'
import { MainBannerProps } from './types'
import T from 'theme'
import { useRenderingByWindowSize } from 'hooks'

const MainBanner = ({
  title,
  subtitle,
  textButton,
  srcImage,
  altDescription
}: MainBannerProps) => {
  const { t } = useTranslator()
  const { windowSize } = useRenderingByWindowSize()
  const calculatesImageOpacity = (): number => {
    if (windowSize.custom(1330)) return 1
    if (windowSize.custom(1200)) return 0.2
    if (windowSize.custom(950)) return 1
    if (windowSize.custom(785)) return 0.2
    if (windowSize.custom(558)) return 1
    return 0.2
  }

  return (
    <S.Container>
      <S.Wrapper>
        <C.SearchBar
          placeholder={t('mainBanner.placeholder')}
          ariaLabel={t('mainBanner.placeholder')}
        />

        <S.WrapperText>
          <C.Typography
            text={title}
            type="text1"
            as="h1"
            weight={500}
            color={T.colors.white}
          />

          <S.WrapperSubtitle>
            {subtitle.map(subtitle => (
              <Fragment key={subtitle}>
                <C.Typography
                  text={subtitle}
                  type="text5"
                  as="h2"
                  weight={500}
                  color={T.colors.primary}
                />
              </Fragment>
            ))}
          </S.WrapperSubtitle>
        </S.WrapperText>

        <C.Button text={textButton} size="large" color="primary" />
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
