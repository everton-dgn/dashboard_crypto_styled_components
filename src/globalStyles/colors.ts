import { css } from 'styled-components'

export const ColorsTheme = css`
  body[data-theme='light'] {
    --colors-text-primary: #12284c;
    --colors-text-tertiary: #12284c;
    --colors-text-quaternary: #798eae;
    --colors-background-page: #f2f4fa;
    --colors-background-card: #ffffff;
    --colors-focus: #12284c;
    --colors-grey-dynamic: #c9d2df;
    --colors-logo: #12284c;
    --colors-chart: #00e0ff;
    --colors-shadow: #0b226619;
    --colors-gradient-overlay: radial-gradient(
      50% 50% at 50% 50%,
      #ebeef600 59%,
      #eceff685 100%
    );
  }

  body[data-theme='dark'] {
    --colors-text-primary: #ffffff;
    --colors-text-tertiary: #00e0ff;
    --colors-text-quaternary: #00e0ff;
    --colors-background-page: #151520;
    --colors-background-card: radial-gradient(#12284c, #151928);
    --colors-focus: #ffffff;
    --colors-grey-dynamic: #364763;
    --colors-logo: #ffffff;
    --colors-chart: #ffffff;
    --colors-shadow: 'transparent';
    --colors-gradient-overlay: radial-gradient(
      50% 50% at 50% 50%,
      #00000000 59%,
      #00000059 100%
    );
  }
`
