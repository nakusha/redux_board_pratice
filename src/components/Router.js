import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import ArticlePage from './views/ArticlePage/ArticlePage'
import BoardPage from './views/BoardPage/BoardPage'
import RegisterPage from './views/RegisterPage/RegisterPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={BoardPage}/>
        <Route exact path='/article/:articleId' component={ArticlePage}/>
        <Route exact path='/register' component={RegisterPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
