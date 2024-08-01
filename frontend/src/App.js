import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Username from './components/Username';

const myrouter = createBrowserRouter([
  {
    path :'/',
    element : <Username/>,
  }
])

const App = () => {
  return (
    <main>
      <RouterProvider router={myrouter}></RouterProvider>
    </main>
  )
}

export default App