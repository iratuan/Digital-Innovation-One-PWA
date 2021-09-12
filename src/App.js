import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
