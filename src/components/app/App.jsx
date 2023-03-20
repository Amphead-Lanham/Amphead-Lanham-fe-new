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
import Lanham from '../lanham/Lanham';
import UpdateAnnouncement from '../admin/UpdateAnnouncement';
import AdminPage from '../admin/AdminPage';
import DetailPage from '../amphead/DetailPage';
import Models from '../lanham/Models';
import ContactForm from '../contact/ContactForm';
import ModelDetail from '../lanham/ModelDetail';
import GalleryB from '../gallery/GalleryB';
import GalleryDetail from '../gallery/GalleryDetail';
import styles from './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../config/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ParallaxProvider> 
          <div className={styles.view}>  
            <Router>
              <Switch>
                    
                <Route 
                  exact path="/" 
                  component={Amphead}
                />
                <Route
                  exact path="/detail/:name"
                  component={DetailPage}
                />
                <Route
                  exact path="/contact/:side"
                  component={ContactForm}
                />
                <Route
                  exact path="/gallery/:side"
                  component={GalleryB}
                />
                <Route
                  exact path="/gallery/detail/:id"
                  component={GalleryDetail}
                />
                <Route
                  exact path="/lanham"
                  component={Lanham}
                />
                <Route
                  exact path="/lanham/models"
                  component={Models}
                />
                <Route
                  exact path="/lanham/model/:model"
                  component={ModelDetail}
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
          </div>
        </ParallaxProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
