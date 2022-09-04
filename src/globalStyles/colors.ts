import { css } from 'styled-components'

export const ColorsTheme = css`
  body[data-theme='light'] {
    --colors-text-primary: #12284c;
    --colors-text-tertiary: #12284c;
    --colors-text-quaternary: #798eae;
    --colors-background-page: #f2f4fa;
    --colors-background-card: #ffffff;
  }

  body[data-theme='dark'] {
    --colors-text-primary: #ffffff;
    --colors-text-tertiary: #00e0ff;
    --colors-text-quaternary: #00e0ff;
    --colors-background-page: #151520;
    --colors-background-card: radial-gradient(#12284c, #151928);
  }
`
