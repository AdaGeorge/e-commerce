import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import HomeScreen from './components/home/HomeScreen'
import Cart from './components/cart/CartScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import ProductScreen from './components/products/ProductScreen'
import PurchasesScreen from './components/purchases/PurchasesScreen'
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  return (
    <div className="App">
      
      <main>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<HomeScreen/>}/>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/purchases' element={<PurchasesScreen/>}/>
        </Route>
        
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>
      </main>
    </div>
  )
}

export default App
