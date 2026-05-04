import Header from './Header'
import {Routes,Route} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Products from './pages/Products'
import Signup from './pages/Signup'
import { useState } from 'react'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <>
    <Header onSearch={handleSearch}/>
   <Routes>

 <Route  path='/'  element={<Mainpage/>}    />
 <Route  path='/products'  element={<Products searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}    />
 <Route  path='/signup'  element={<Signup/>}    />
 <Route  path='/about'  element={<Mainpage/>}    />

   </Routes>
    </>
  )
}

export default App