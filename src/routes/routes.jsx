import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackendDocumentation from '../pages/backendDocumentacion.jsx';
import HomePage from '../pages/homePage.jsx';
import UserManual from '../pages/manualDeUsuario.jsx';
import FrontendDocumentation from '../pages/frontEndDocumentacion.jsx';
const AppRoutes = () => {
    return (
      <Routes>
        <Route path='/backend-documentation' element={<BackendDocumentation/>}/>
        <Route path='/frontend-documentation' element={<FrontendDocumentation/>}/>

        <Route path='/user-manual' element={<UserManual/>}/>
        <Route path='/' element={<HomePage/>}/>

      </Routes>
    );
  };
  
  export default AppRoutes;