import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AuthProvider from '../auth/AuthProvider';
import PrivateRoute from '../auth/PrivateRoute';
import Signup from '../auth/signup';
import Login from '../auth/Login';
import Amphead from '../amphead/Amphead';
import UpdateAnnouncement from '../admin/UpdateAnnouncement';
import AdminPage from '../admin/AdminPage';


export default function App() {
  return (
    <AuthProvider>
      <ParallaxProvider>   
        <Router>
          <Switch>
                    
            <Route 
              exact path="/" 
              component={Amphead}
            />
            <Route
              exact path="/signup"
              component={Signup}
            />
            <Route
              exact path="/login"
              component={Login}
            />
            <PrivateRoute  
              exact path="/admin" 
              component={AdminPage} 
            />
            <PrivateRoute
              exact path="/admin/update/:id"
              component={UpdateAnnouncement}
            />
          </Switch>
                    
        </Router>
      </ParallaxProvider>
    </AuthProvider>
  );
}
