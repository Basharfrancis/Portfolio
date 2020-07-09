import React,{Component} from 'react';
import './style/app.scss';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import InitTilt from './js/tilt';
import InitSr from './js/sr';


class App extends Component {

  render() {
    return (
        <BrowserRouter basename="/">
          <ScrollToTop>
            <InitSr/>
            <InitTilt/>
            <Routes {...this.props}/>
          </ScrollToTop>
        </BrowserRouter>
    );
  }
}

export default App;
