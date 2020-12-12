import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Amphead from '../amphead/Amphead';
import UpdateAnnouncement from '../admin/UpdateAnnouncement';
import AdminPage from '../admin/AdminPage';

export default function App() {
  return (
    <ParallaxProvider>   
      <Router>
        <Switch>
                    
          <Route 
            exact path="/" 
            component={Amphead}
          />
          <Route 
            exact path="/admin" 
            component={AdminPage} 
          />
          <Route
            exact path="/admin/update/:id"
            component={UpdateAnnouncement}
          />
        </Switch>
                    
      </Router>
    </ParallaxProvider>
  );
}
