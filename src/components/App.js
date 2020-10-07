import React from 'react';
import '../App.css';
import Designer from './custom-designer/Designer'
import Home from './home/HomePage'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Route } from 'react-router-dom'



function App() {
    return (
        <div className="App">
            <Route exact path="/" render={(props) => <Home />} />
            <Route exact path="/designer" render={(props) => <Designer />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route path="/signup" render={(props) => <Signup {...props} />} />

        </div>
    );
}

export default App;
