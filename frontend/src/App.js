import React from 'react'
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Username from './components/Username';
import Password from './components/Password';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import Register from './components/Register';
import Profile from './components/Profile';

/*const myrouter = createBrowserRouter([
  {
    path :'/',
    element : <Username/>,
  },
  {
    path : '/password',
    element : <Password />
  },
  {
    path : '/recovery',
    element : <Recovery/>
  },
  {
    path : '/reset',
    element : <Reset/>
  },
  {
    path : '/register',
    element : <Register/>
  },
  {
    path : '/profile',
    element :<Profile />
  },
])*/

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Username />} />
          <Route path="/password" element={<Password />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App