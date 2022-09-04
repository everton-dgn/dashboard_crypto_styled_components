import { css } from 'styled-components'

export const ColorsTheme = css`
  body[data-theme='light'] {
    --colors-background: #f2f4fa;
    --colors-text-primary: #12284c;
    --colors-text-tertiary: #12284c;
    --colors-text-quaternary: #798eae;
  }

  body[data-theme='dark'] {
    --colors-background: #151520;
    --colors-text-primary: #ffffff;
    --colors-text-tertiary: #00e0ff;
    --colors-text-quaternary: #00e0ff;
  }
`
