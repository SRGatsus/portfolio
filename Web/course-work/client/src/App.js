import React from "react";
import { Route } from 'react-router-dom';


import {Footer, Header} from "./components";
import {Account,Main,Course, Teachers, Contacts} from "./pages";
import {AuthContext} from './context/AuthContext'
import {useAuth} from './hooks/auth.hook'


function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  return (


    
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
    <div className="layout">
        <Route path="/"  exact>
          <Header items={true}/>
          <Main/>
        </Route>
        <Route path="/s*"  exact>
        <Header items ={false}/>
        <Route path="/scourse" component={Course} exact />
        <Route path="/steachers" component={Teachers} exact />
        <Route path="/scontacts" component={Contacts} exact />
        <Route path="/spersonalAccount" component={Account} exact />
        </Route>
        <Footer/>
      </div>
</AuthContext.Provider>
  );
}

export default App;
