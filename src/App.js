import React from 'react'
import MenuSidebar from './Components/MenuSidebar/MenuSidebar'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import routes from './routes'


function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <div className="dashboard">
            <MenuSidebar />
            <div className="right">
              <div className="right__content">
                {showContentMenus(routes)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

const showContentMenus = (routes) => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    })
  }
  return <Switch>{result}</Switch>
}
export default App;