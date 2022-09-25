import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from 'pages'
import * as C from 'components'

const RoutesWrapper = () => (
  <Suspense fallback={<>Loading...</>}>
    <Routes>
      <Route element={<C.DefaultTemplate />}>
        <Route path="/" element={<Pages.Home />} />
      </Route>

      <Route element={<C.ErrorTemplate />}>
        <Route path="*" element={<Pages.Error />} />
      </Route>
    </Routes>
  </Suspense>
)

export default RoutesWrapper
