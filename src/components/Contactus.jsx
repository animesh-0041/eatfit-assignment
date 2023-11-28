// ContactUs.js
import React from 'react';
import { Box, Heading, Input, Textarea, Button, Flex, Img, FormControl, FormLabel } from '@chakra-ui/react';

const Contactus = () => {
    const handelsubmit=()=>{

    }
  return (
    <Box id='contactus'>
         <Heading textAlign={'center'}>Contact <Heading as={'span'} color={"#FF5722"}>Us</Heading></Heading>
  <Box w={['80%','60%','60%']} m={'auto'} display={'flex'} justifyContent={'space-between'} shadow={'lg'} >
   
    <Box w={['80%','80%','50%']}  p={'25px'}>
        <form  onSubmit={handelsubmit}>
       <FormControl>
        <FormLabel>Name</FormLabel>
        <Input required placeholder='Enter Your Name'/>
       </FormControl>

       <FormControl>
        <FormLabel>Email</FormLabel>
        <Input required type='email' placeholder='Enter Your Email'/>
       </FormControl>

       <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea required type='text' placeholder='Write Here...'/>
       </FormControl>
       <Box m={'10px 0'}>
        <Button type='submit' _hover={{bg:"#FF5722"}} w={'100%'} bg={'#FF5722'} color={'white'}>Submit</Button>
       </Box>
       </form>
    </Box>




    <Box   w={'50%'} display={['none','flex','flex']} justifyContent={'center'} alignItems={'center'}>
        <Img  w={'100%'} src='https://cdni.iconscout.com/illustration/premium/thumb/pizza-delivery-man-showing-smartphone-for-rating-2656101-2214908.png?f=webp'/>
    </Box>
  </Box>
  </Box>
  );
}

export default Contactus;
