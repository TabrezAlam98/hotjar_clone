import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import WhyHotjar from './WhyHotjar'
import Pricing from './Pricing'
import Learn from './Learn'
import Company from './Company'



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/whyhotjar' element={<WhyHotjar/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/learn' element={<Learn/>}/>
            <Route path='/company' element={<Company/>}/>
            </Routes>
      
    </div>
  )
}

export default AllRoutes