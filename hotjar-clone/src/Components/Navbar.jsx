import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Box, Button,Spacer,Flex,Image,Menu,MenuButton,MenuList,MenuItem, Divider} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import ProductChakra from '../ChakraComponents/ProductChakra'
import style from './Nav.module.css'
import WhyHotjarChakra from '../ChakraComponents/WhyHotjarChakra'
import LearnChakra from '../ChakraComponents/LearnChakra'
import CompanyChakra from '../ChakraComponents/CompanyChakra'
import { ThemeContext } from '../Context/ThemeContext'


const Navbar = () => {
  const [active, setActive] = React.useState("");
  const {isLight,toggleTheme}=React.useContext(ThemeContext)

  
  return (
    <>
    <div className={style.Nav}>
      <div className={style.navDiv1}>
    
      <Flex>
        <Link to='/'><Image className={style.logo} src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/whtdqojxdp7jhhupl4sf'/></Link>
        <Link to='/product'></Link>
          <ProductChakra/>
        
        <Link className={active === "whyHotjar" ? "active" : "default"} onClick={() => setActive("whyHotjar")} to='/whyHotjar'></Link>
        <WhyHotjarChakra/>
        
        <Link to='/pricing'><Button >Pricing</Button></Link>
        <Link to={'/learn'}></Link>
        <LearnChakra/>
        
        <Link to='/company'></Link>
        <CompanyChakra/>
        
        <Spacer/>
        <Link to='/login'>
        <Button bg={'white'} border={'1px solid rgb(50,79,190)'} color={'rgb(50,79,190)'} mr={3}>Sign in</Button>
        </Link>
        
        <Button bg={'rgb(50,79,190)'} border={'1px solid rgb(50,79,190)'} color={'white'}>Get started free</Button>
        <Button width="100px" ml={5} onClick={toggleTheme}>{isLight?"Dark":"Light"}</Button>
        </Flex>
       
        </div>
    </div>
    <Divider mt={2}/>
    </>)
}

export default Navbar