import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import App from './App';
import router from './router'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
  // {/* </React.StrictMode> */}
  <RouterProvider router={router}></RouterProvider>
);
  