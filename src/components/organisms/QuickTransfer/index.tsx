import { ReactComponent as IconArrowEast } from 'assets/icons/arrowEast.svg'
import * as C from 'components'
import { creditCardNumberFormatter } from 'data/creditCardNumberFormatter'
import { OPTIONS_DATA } from 'fakeApi'
import { useState } from 'react'
import T from 'theme'
import * as S from './styles'
import { QuickTransferProps } from './types'

const QuickTransfer = ({
  initialState,
  increment,
  quickTransferData
}: QuickTransferProps) => {
  const [numberOfItems, setNumberOfItems] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)

  const isEntireListIsDisplayed = () => {
    return numberOfItems === quickTransferData.length
  }

  const amountOfItemsRemainingInList = () => {
    return quickTransferData.length - numberOfItems
  }

  const increaseNumberOfItems = () => {
    if (isEntireListIsDisplayed()) return
    setIsLoading(true)
    setTimeout(() => {
      if (amountOfItemsRemainingInList() < increment) {
        setNumberOfItems(
          prevState => prevState + amountOfItemsRemainingInList()
        )
      } else {
        setNumberOfItems(prevState => prevState + 3)
      }
      setIsLoading(false)
    }, 1500)
  }

  const calculatesWhenToShowTheViewMoreButton = () => {
    return !isEntireListIsDisplayed() && numberOfItems > 2
  }

  return (
    <C.CardLayout
      title="QUICK TRANSFER"
      optionsMenu={OPTIONS_DATA}
      positionRelative={true}
    >
      <S.Wrapper paddingBottom={calculatesWhenToShowTheViewMoreButton()}>
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
      </S.Wrapper>
      {calculatesWhenToShowTheViewMoreButton() && (
        <S.WrapperButton>
          {isLoading ? (
            <C.Load size={30} />
          ) : (
            <C.Button
              text="View more"
              aria-label="View more"
              size="small"
              color="primary"
              onClick={increaseNumberOfItems}
            />
          )}
          <S.WrapperViewMore />
        </S.WrapperButton>
      )}
    </C.CardLayout>
  )
}

export default QuickTransfer
