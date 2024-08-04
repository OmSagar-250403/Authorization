import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import PageNotFound from './components/PageNotFound';
import Username from './components/Username';
import Password from './components/Password';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import Register from './components/Register';

const myrouter = createBrowserRouter([
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
])

const App = () => {
  return (
    <main>
      <RouterProvider router={myrouter}></RouterProvider>
    </main>
  )
}

export default App