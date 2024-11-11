import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import ReactQuery1 from './ReactQuery1'
import ReactQuery2 from './ReactQuery2'
import ReactQuery3, { loader } from './ReactQuery3'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path='/' element={<Outlet/>}>
      <Route path='reactQuery1' element={<ReactQuery1/>}/>
      <Route path='reactQuery2' element={<ReactQuery2/>}/>
      <Route path='reactQuery3' element={<ReactQuery3/>} loader={loader}/>
    </Route>
    <Route path='*' element={<Navigate to='/'/>}></Route>
  </Route>
))

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App