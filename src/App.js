import React from 'react'
import MenuSidebar from './Components/MenuSidebar/MenuSidebar'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import routes from './routes'
import {useSelector} from 'react-redux'
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  const token = useSelector(state => state.isToken)
  console.log(token);
  return (
    <Router>
      <div className="wrapper">
        <div className="container"> 

        { token? <div className="dashboard">
            <MenuSidebar />
            <div className="right">
              <div className="right__content">
                {
                  showContentMenus(routes)
                }
              </div>
            </div>
          </div>:<Route path="/admin/login" exact component={LoginPage} >
          </Route>
          }
          
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

  return <Switch>{result}
  </Switch>
}
export default App;