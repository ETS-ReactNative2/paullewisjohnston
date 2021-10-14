import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Signup from './pages/auth/Signup.js'
import Login from './pages/auth/Login.js'
import DynamicLandingPage from './pages/DynamicLandingPage'
import DynamicDetailPage from './pages/DynamicDetailPage'
import GoCardless from './pages/GoCardless'
import GoCardlessRedirect from './pages/GoCardlessRedirect'
import GoCardlessSuccess from './pages/GoCardlessSuccess'
import GoCardlessFailed from './pages/GoCardlessFailed'
import dataSiteConfig from './assets/data/dataSiteConfig';
import dataHome from './assets/data/dataHome';

import './App.css'

function App(){
  return(
  <div sx="App" style={{overflowX:'clip'}}>
    <BrowserRouter>
      <Header dataSiteConfig={dataSiteConfig}/>
        <Switch>
          <Route exact path='/'>
            <DynamicLandingPage data={dataHome}/>
          </Route>
          <Route exact path='/home'>
            <DynamicLandingPage data={dataHome}/>
          </Route>
          <Route exact path='/projects'>
            <DynamicLandingPage data={dataHome}/>
          </Route>
          <Route exact path='/demos'>
            <DynamicLandingPage data={dataHome}/>
          </Route>
          <Route exact path='/contact'>
            <DynamicLandingPage data={dataHome}/>
          </Route>
          <Route exact path='/gocardless/'>
            <GoCardless/>
          </Route>
          <Route exact path='/gocardless-redirect'>
            <GoCardlessRedirect/>
          </Route>
          <Route exact path='/gocardless-success'>
            <GoCardlessSuccess/>
          </Route>
          <Route exact path='/gocardless-failed'>
            <GoCardlessFailed/>
          </Route>
          <Route exact path='/projects/:id'>
            <DynamicDetailPage data={dataHome}/>
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      <Footer dataSiteConfig={dataSiteConfig} />
    </BrowserRouter>
  </div>
  );
}
export default App;
