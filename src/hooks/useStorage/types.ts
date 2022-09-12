export type useStorageType = {
  key: string
  initialValue?: any
  storage?: 'sessionStorage'
}

export type UseStorageReturnType = {
  getStorage: unknown
  setStorageState: (value: any) => void
}
