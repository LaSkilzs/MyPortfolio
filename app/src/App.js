import React from "react";
import routes from "./Routes";
import SideNav from "./components/SideNav";
import { Route, Switch } from "react-router-dom";

const App = props => {
  return (
    <React.Fragment>
      <SideNav />
      <Switch>
        {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={routerProps => <C {...routerProps} {...rest} />}
          />
        ))}
      </Switch>
    </React.Fragment>
  );
};

export default App;
