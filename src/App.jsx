import Header from './Header'
import {Routes,Route} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Products from './pages/Products'
import Signup from './pages/Signup'
function App() {
  return (
    <>
    <Header/>
   <Routes>

 <Route  path='/'  element={<Mainpage/>}    />
 <Route  path='/products'  element={<Products/>}    />
 <Route  path='/signup'  element={<Signup/>}    />
 <Route  path='/about'  element={<Mainpage/>}    />

   </Routes>
    </>
  )
}

export default App