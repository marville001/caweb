import React from 'react'
import { Route, Switch } from 'react-router-dom'

import BounceLoader from "react-spinners/BounceLoader"

// Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Login = React.lazy(() => import("./pages/Login"))

const loading = (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column-reverse"
    }}>
      <BounceLoader color="crimson" loading={true} size={30} />
    </div>
  )

const Admin = () => {
    return (
        <React.Suspense fallback={loading}>
        <Switch>
            <Route exact path="/admin/" render={props => <Login {...props} />} />
            <Route exact path="/admin/login" render={props => <Login {...props} />} />
            <Route exact path="/admin/dashboard" render={props => <Dashboard {...props} />} />
            
          </Switch>
          </React.Suspense>
    )
}

export default Admin;