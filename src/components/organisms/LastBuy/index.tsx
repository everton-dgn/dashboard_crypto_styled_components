import { Fragment } from 'react'
import * as S from './styles'
import * as C from 'components'
import { LastBuyProps } from './types'
import { ReactComponent as AddCriptocurrency } from 'assets/icons/cryptocurrency/addCryptocurrency.svg'

const LastBuy = ({ dataLastBuy }: LastBuyProps) => {
  return (
    <C.CardLayout title="LAST BUY" optionsMenu={[]}>
      <S.Wrapper>
        {dataLastBuy.map(
          ({ currency, isPositive, currentPercentageVariation, icon }) => (
            <Fragment key={currency}>
              <S.Crypto>
                <C.BoxIconCrypto svgIcon={icon} />
                <S.InfoCrypto>
                  <C.Typography
                    text={currency}
                    type="text4"
                    as="h2"
                    weight={500}
                  />
                  <C.VariableValueWithArrowSign
                    isPositive={isPositive}
                    value={`${currentPercentageVariation}%`}
                    size="small"
                  />
                </S.InfoCrypto>
              </S.Crypto>
              {/* <C.Separator maxHeight="26px" /> */}
            </Fragment>
          )
        )}
        <C.IconButton
          icon={<C.BoxIconCrypto svgIcon={<AddCriptocurrency />} />}
          ariaLabel="Add cryptocurrency"
          size="30px"
        />
      </S.Wrapper>
    </C.CardLayout>
  )
}

export default LastBuy
