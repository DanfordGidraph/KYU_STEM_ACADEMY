import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//Module components
import {Router, Scene, ActionConst} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';

//custom components
import SplashScreen from './components/splash/SplashScreen';
import StudentLogin from './components/login/StudentLogin';
import LecturersLogin from './components/login/LecturersLogin';
import StudentSignup from './components/signup/StudentSignup';
import LecturerSignup from './components/signup/LecturerSignup';
import ContentLanding from './components/content/ContentLanding';
import LoginChoice from './components/login/LoginChoice';
import DrawerContent from './DrawerContent';

export default class App extends Component {
  

  render() {
    return (
      <Router>
        <Scene key='root'>

          <Scene initial key="Landing" title='Landing' hideNavBar component={SplashScreen} 
          onEnter={()=>{ global.globalTitle = 'SplashScreen'; }} />
          <Scene  key="LoginChoice" title='Login Choice' hideNavBar component={LoginChoice} type={ActionConst.RESET} 
          onEnter={()=>{ global.globalTitle = 'Login Choice'; }}  />

          <Scene key="StudentsLogin" title='Login' hideNavBar component={StudentLogin}
          onEnter={()=>{ global.globalTitle = 'Student Login'; }} />
          <Scene key="LecturersLogin" title='Login' hideNavBar component={LecturersLogin}
          onEnter={()=>{ global.globalTitle = 'Lecturers Login'; }} />

          <Scene key="StudentSignup" title='SignUp' hideNavBar component={StudentSignup}
          onEnter={()=>{ global.globalTitle = 'Student Sign Up'; }} />
          <Scene key="LecturerSignup" title='SignUp' hideNavBar component={LecturerSignup}
          onEnter={()=>{ global.globalTitle = 'Lecturers Sign Up'; }} />


          <Scene key="BSc_IT_Content" title='Bachelor of Science IT' hideNavBar component={ContentLanding} type={ActionConst.RESET} 
          onEnter={()=>{global.globalTitle = 'Bachelor of Science IT';}} />
          
        </Scene>
      </Router>
    )
  }
}