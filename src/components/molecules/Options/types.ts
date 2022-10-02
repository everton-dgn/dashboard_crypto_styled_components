type OptionItems = {
  id: number
  text: string
}

export type OptionsProps = {
  optionsData: OptionItems[]
}

export type EventKey = {
  key: string
}

export type EventKeyFull = EventKey & {
  shiftKey: boolean
}
