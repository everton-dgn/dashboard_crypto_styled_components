import { useState } from 'react'
import { storageAdapter } from 'adapters/storage'
import { useStorageType, UseStorageReturnType } from './types'

export const useStorage = ({
  key,
  initialValue,
  storage
}: useStorageType): UseStorageReturnType => {
  const { getStorageAdapter, setStorageAdapter } = storageAdapter(storage)
  const [getStorage, setStorage] = useState<unknown>(
    getStorageAdapter(key, initialValue) ?? initialValue
  )

  const setStorageState = (value: any): void => {
    setStorageAdapter(key, value)
    setStorage(value)
  }

  return { getStorage, setStorageState }
}
