export type Align = 'left' | 'center' | 'right'

export type Typography =
  | 'text1'
  | 'text2'
  | 'text3'
  | 'text4'
  | 'text5'
  | 'text6'

export type Weight = 300 | 400 | 500

export type TextElements = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

export type TypographyProps = {
  text: string
  type: Typography
  as: TextElements
  weight?: Weight
  align?: Align
  color?: string
}
