import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route.jsx'
//tanStack Query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Route}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
