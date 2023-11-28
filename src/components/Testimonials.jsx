import { Avatar, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Testimonials = () => {
  return (
    <Box m={'20px 0'} id='testimonials'>
        <Heading textAlign={'center'}>Testimonials</Heading>
        <Box display={'flex'} flexDirection={['column','column','row']} justifyContent={'space-between'} gap={'25px'} w={'80%'} m={'auto'}>

        <Box p={'25px'} shadow={'md'} borderRadius={'10px'}>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtmPQz89LOBIHUB6gbk9nqP8YALDRnGtSNw&usqp=CAU'/>
            <Text>"Outstanding! The variety of dishes is amazing, and the delivery is prompt. The quality and taste exceeded my expectations. Five stars!"</Text>
            <Heading size={'sm'} textAlign={'right'} color={'#FF5722'}>Sourav Maity</Heading>
        </Box>
        <Box p={'25px'} shadow={'md'} borderRadius={'10px'}>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHY8dEq9_kLDI5mgHtCGqNd03xf8N5xRStw&usqp=CAU'/>
            <Text>"Impressed with the freshness and flavors. It's like having a personal chef! Reliable service, and the menu diversity keeps me coming back."</Text>
            <Heading size={'sm'} textAlign={'right'} color={'#FF5722'}>Biman Patra</Heading>
        </Box>
        <Box p={'25px'} shadow={'md'} borderRadius={'10px'}>
            <Avatar src='https://bit.ly/dan-abramov'/>
            <Text>"Reliable and delicious! This food delivery app never disappoints. Healthy options, on-time delivery, and a convenient way to enjoy restaurant-quality meals at home."</Text>
            <Heading size={'sm'} textAlign={'right'} color={'#FF5722'}>Animesh Ghoroi</Heading>
        </Box>



        </Box>
    </Box>
  )
}

export default Testimonials
