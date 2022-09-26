import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from 'pages'
import * as C from 'components'

const RoutesWrapper = () => (
  <Suspense fallback={<C.Load />}>
    <Routes>
      <Route path="/" element={<C.DefaultTemplate />}>
        <Route index element={<Pages.Home />} />
        <Route element={<C.ErrorTemplate />}>
          <Route path="*" element={<Pages.Error />} />
        </Route>
      </Route>

      <Route element={<C.ErrorTemplate />}>
        <Route path="*" element={<Pages.Error />} />
      </Route>
    </Routes>
  </Suspense>
)

export default RoutesWrapper
