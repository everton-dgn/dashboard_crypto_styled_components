import { creditCardNumberFormatter } from 'data/creditCardNumberFormatter'
import { useState } from 'react'
import * as S from './styles'
import * as C from 'components'
import T from 'theme'
import { QuickTransferProps } from './types'
import { ReactComponent as IconArrowEast } from 'assets/icons/arrowEast.svg'

const QuickTransfer = ({
  initialState,
  increment,
  quickTransferData
}: QuickTransferProps) => {
  const [numberOfItems, setNumberOfItems] = useState(initialState)

  const isEntireListIsDisplayed = () => {
    return numberOfItems === quickTransferData.length
  }

  const amountOfItemsRemainingInList = () => {
    return quickTransferData.length - numberOfItems
  }

  const increaseNumberOfItems = () => {
    if (isEntireListIsDisplayed()) return
    if (amountOfItemsRemainingInList() < increment) {
      setNumberOfItems(prevState => prevState + amountOfItemsRemainingInList())
    } else {
      setNumberOfItems(prevState => prevState + 3)
    }
  }

  const calculatesWhenToShowTheViewMoreButton = () => {
    return !isEntireListIsDisplayed() && numberOfItems > 2
  }

  return (
    <C.CardLayout title="QUICK TRANSFER" optionsMenu={[]}>
      <S.Wrapper>
        {quickTransferData
          .slice(0, numberOfItems)
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
        {calculatesWhenToShowTheViewMoreButton() && (
          <>
            <S.WrapperButton>
              <C.Button
                text="View more"
                aria-label="View more"
                size="small"
                color="primary"
                onClick={increaseNumberOfItems}
              />
            </S.WrapperButton>
            <S.WrapperViewMore />
          </>
        )}
      </S.Wrapper>
    </C.CardLayout>
  )
}

export default QuickTransfer
