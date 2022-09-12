import { useLayoutEffect } from 'react'
import { UseSetPageTitleType } from './types'

export const useSetPageTitle = ({ pageTitle }: UseSetPageTitleType): void => {
  useLayoutEffect(
    function setPageTitle() {
      document.title = pageTitle
    },
    [pageTitle]
  )
}
