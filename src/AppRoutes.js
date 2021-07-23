import React, { Suspense, lazy } from "react"
import { Switch, Route } from "react-router-dom"
import Spinner from "./components/Spinner"

const Error404 = lazy(() => import("./pages/Error404"))
const Videopage = lazy(() => import("./pages/Videopage"))

function AppRoutes(props) {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={Videopage} />
        <Route component={Error404} />
      </Switch>
    </Suspense>
  )
}

export default AppRoutes
