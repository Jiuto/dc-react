import React,{Suspense} from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import AppRoute from "@/router/routes";
import Loading from "@/components/loading";
import { hot } from 'react-hot-loader';

class App extends React.PureComponent {
  route(){
    return (
      <Router>
        <Suspense fallback={<Loading/>}>
          {Object.keys(AppRoute).map(key => {
            let item = AppRoute[key];
            return (<Route key={key} path={item.path} component={item.component} exact />)
          })}
         </Suspense>
      </Router>
    );
  }
  render() {
    return this.route();
  }
}

export default hot(module)(App);
