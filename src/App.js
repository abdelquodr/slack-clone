import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './css/app.css'
import Login from './components/Login'
import { useStateValue } from './StateProvider'

function App() {


  const [{ user }, dispatch] = useStateValue()


  return (
    <div className="App">
      <Router>
        {!user ? (<Login />) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                {/* <Route exact path="/">
                  <h3>Welcome</h3>
                </ Route> */}
                <Route path="/room/:roomId" >
                  <Chat />
                </ Route>
              </Switch>
            </div>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;
