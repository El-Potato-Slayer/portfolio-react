import { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header'

function Home() {
  return (
    <Fragment>
      <Header></Header>
    </Fragment>
  );
}

export default Home;
