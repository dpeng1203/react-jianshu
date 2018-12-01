import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import { Globalstyle } from './style'
import { IconGlobalstyle } from './statics/iconfont/iconfont'
import Header from './common/header'
import store from './store'
// import Router from './router/router';
import Detail from './pages/detail'
import Home from './pages/home'

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
        <div>
          <Globalstyle/>
          <IconGlobalstyle/>
          
          {/* <Router></Router> */}
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
