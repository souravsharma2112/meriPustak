import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './App.css'
import './shopgrid.css'
import './section.css'
import { AppProvider } from './Components/AppContex.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Shop from './Components/Shop.jsx'
import Cart from './Components/Cart.jsx'
import Wishlist from './Components/Wishlist.jsx'
import Kids from './Components/Kids.jsx'
import Books from './Components/Books.jsx'
import Comics from './Components/Comics.jsx'
import Tech from './Components/Tech.jsx'
import Cook from './Components/Cook.jsx'


import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'


// import Register from './Components/Register.jsx'
// import Login from './Components/Login.jsx'
// import Shopingcart from './Components/Shopingcart.jsx'
// import Wishlist from './Components/Wishlist.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "wishlist",
        element: <Wishlist />
      },
      {
        path: "kids",
        element: <Kids />
      },
      {
        path: "books",
        element: <Books />
      },
      {
        path: "comics",
        element: <Comics />
      },
      {
        path: "tech",
        element: <Tech />
      },
      {
        path: "cook",
        element: <Cook />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </Provider>
  </React.StrictMode>,
)
