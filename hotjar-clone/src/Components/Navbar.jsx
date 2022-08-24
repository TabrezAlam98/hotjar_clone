import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Button,Spacer,Flex,Image,Menu,MenuButton,MenuList,MenuItem, Divider} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import ProductChakra from '../ChakraComponents/ProductChakra'
import style from './Nav.module.css'
import WhyHotjarChakra from '../ChakraComponents/WhyHotjarChakra'
import LearnChakra from '../ChakraComponents/LearnChakra'
import CompanyChakra from '../ChakraComponents/CompanyChakra'


const Navbar = () => {
  return (
    <>
    <div className={style.Nav}>
    
      <Flex>
        <Link to='/'><Image className={style.logo} src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/whtdqojxdp7jhhupl4sf'/></Link>
        <Link to='/product'>
          <ProductChakra/>
        </Link>
        <Link to='/whyHotjar'>
        <WhyHotjarChakra/>
        </Link>
        <Link to='/pricing'><Button >Pricing</Button></Link>
        <Link to={'/learn'}>
        <LearnChakra/>
        </Link>
        <Link to='/company'>
        <CompanyChakra/>
        </Link>
        <Spacer/>
        <Button bg={'white'} border={'1px solid rgb(50,79,190)'} color={'rgb(50,79,190)'} mr={3}>Sign in</Button>
        <Button bg={'rgb(50,79,190)'} border={'1px solid rgb(50,79,190)'} color={'white'}>Get started free</Button>
        <Button>toggle</Button>
        </Flex>
       
   
    </div>
    <Divider mt={2}/>
    </>)
}

export default Navbar