import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from 'pages'
import * as C from 'components'

const RoutesWrapper = () => (
  <Suspense fallback={<>Lazy Loading...</>}>
    <Routes>
      <Route element={<C.DefaultTemplate />}>
        <Route index element={<Pages.Home />} />
      </Route>

      <Route
        path="*"
        element={
          <C.ErrorTemplate>
            <Pages.Error />
          </C.ErrorTemplate>
        }
      />
    </Routes>
  </Suspense>
)

export default RoutesWrapper
