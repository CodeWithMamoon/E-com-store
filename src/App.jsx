import Cart from './customer/components/Cart/Cart.jsx'
import CartItem from './customer/components/Cart/CartItem.jsx'
import CheckOut from './customer/components/CheckOut/CheckOut.jsx'
import Navigation from './customer/components/navigation/Navigation.jsx'
import Product from './customer/components/Product/Product.jsx'
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx'

import Home from './customer/pages/Homepage/Home'

function App() {
  

  return (
    <>
    
    <Navigation/>
    <div>
    {/* <Home/> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      <CheckOut/>
    </div>
   
  
  </>
  )
}

export default App
