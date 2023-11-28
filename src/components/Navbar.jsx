import { Box, Img,Link  } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Box w={'100%'} position={'fixed'} top={'0'} bg={'white'}>
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}  h={'50px'} p={'0 25px'}>
        <Box w={'10%'} >
            <Img w={'100%'} src='https://i.ibb.co/MG9PQT0/eatfit-logo-horizontal.jpg'/>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} gap={'25px'} fontWeight={'bold'}>
            <Link href={'#menu'}>Menu</Link>
            <Link href={'#testimonials'}>Testimonials</Link>
            <Link href={'#aboutus'}>About Us</Link>
            <Link href={'#contactus'}>Contact Us</Link>
        </Box>
    </Box>
    </Box>
  )
}
