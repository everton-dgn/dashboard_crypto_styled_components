import { creditCardNumberFormatter } from 'data/creditCardNumberFormatter'
import * as S from './styles'
import * as C from 'components'
import T from 'theme'
import { QuickTransferProps } from './types'
import { ReactComponent as IconArrowEast } from 'assets/icons/arrowEast.svg'

const QuickTransfer = ({ quickTransferData }: QuickTransferProps) => {
  return (
    <C.CardLayout title="QUICK TRANSFER" optionsMenu={[]}>
      <S.Wrapper>
        {quickTransferData
          .slice(0, 2)
          .map(({ urlImage, name, flagLogo, cardNumber }) => (
            <S.WrapperUser key={cardNumber}>
              <C.Avatar name={name} urlImage={urlImage} size="medium" />

              <S.ContentInfo>
                <C.Typography text={name} type="text6" as="span" />
                <S.WrapperInfoCard>
                  {flagLogo}
                  <C.Typography
                    text={creditCardNumberFormatter(cardNumber)}
                    type="text6"
                    as="span"
                    color={T.colors.grey}
                  />
                </S.WrapperInfoCard>
              </S.ContentInfo>

              <C.IconButton
                icon={<IconArrowEast />}
                ariaLabel="viewMore"
                color={T.colors.grey}
              />
            </S.WrapperUser>
          ))}
      </S.Wrapper>
    </C.CardLayout>
  )
}

export default QuickTransfer
