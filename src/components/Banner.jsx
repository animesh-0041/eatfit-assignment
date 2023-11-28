import { Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Box id='aboutus' m={'50px 0'} display={'flex'} justifyContent={'space-between'} gap={'25px'} p={'30px'} flexDirection={['column-reverse','column-reverse','row']}>
        <Box w={['80%','80%','40%']} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box>
            <Heading m={'25px 0'} textAlign={'center'}>About <Heading as={'span'} color={"#FF5722"}>Us</Heading></Heading>
                {/* <Heading ></Heading>
                <br/> */}
                <Heading m={'10px 0'} size={'md'} >Fastest<Heading size={'md'} as={'span'} color={'#FF5722'}>Delivery</Heading> and <Heading as={'span'} color={'#FF5722'} size={'md'}>Easy</Heading> Pickup</Heading>
                <Text>Welcome to our food delivery app, where we strive to bring you a delightful culinary experience. Explore a diverse menu of health-focused, mouthwatering dishes delivered right to your doorstep. We're passionate about serving you nutritious, delicious meals crafted with care. Your journey to a healthier lifestyle starts here.</Text>
            </Box>
        </Box>



        <Box textAlign={'center'}>
            <Img m={'auto'} w={'80%'} src='https://i.ibb.co/H23BjRJ/pexels-photo-262959-removebg-preview.png'/>
        </Box>

    </Box>
  )
}

export default Banner
