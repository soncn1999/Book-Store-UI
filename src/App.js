import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Fragment } from 'react';
import Homepage from './containers/Homepage';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/get-category/all" />
        </Route>
        <Route path="/get-book-id/:bookId" component={(Homepage)} />
        <Route path="/get-category/:categoryId" component={(Homepage)} />
      </Switch>
    </Fragment>
  );
}

export default App;
