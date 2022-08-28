import React from 'react'
import AutoSlider1 from '../AllPages/Home/AutoSlider1'
import HomePart1 from '../AllPages/Home/HomePart1'
import HomePart2 from '../AllPages/Home/HomePart2'
import HomePart3 from '../AllPages/Home/HomePart3'
import HomePart4 from '../AllPages/Home/HomePart4'
import HomePart5 from '../AllPages/Home/HomePart5'
import HomePart6 from '../AllPages/Home/HomePart6'
import HomePart7 from '../AllPages/Home/HomePart7'
import HomePart8 from '../AllPages/Home/HomePart8'
import Footer from '../Components/Footer'
import Heatmap from './Heatmap'
import Login from './Login'
import Recording from './Recording'
import Workspaces from './Workspaces'

const Home = () => {
  return (<>
  
    <HomePart1/>
    <HomePart2/>
    <HomePart3/>
    <HomePart4/>
    <HomePart5/>
    <HomePart6/>
    <HomePart7/>
    <HomePart8/>
    <Footer/>
    
    {/* <Recording/> */}
    
    </>)
}

export default Home