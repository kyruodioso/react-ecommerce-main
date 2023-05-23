import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'

import { router } from './config';
import {RouterProvider} from 'react-router-dom'
import UserProvider from './context/UserContext';
import ProductsProvider from './context/ProductsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
    <RouterProvider router={router} />
    </ProductsProvider>
    </UserProvider>
  </React.StrictMode>,
)
