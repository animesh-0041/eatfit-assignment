import { Box, Checkbox, Heading, Img, Input, Radio, RadioGroup, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Menu = () => {
    const [data,setData]=useState([])
    const [cat,setCat]=useState([])
const [sort,setSort]=useState("")
const [check,setCheck]=useState([])
const [checkedItems, setCheckedItems] = useState([]);


const handelsort=(e)=>{
  if(e.target.value=="lowToHigh"){
setSort("asc")
  }
  else if(e.target.value=="highToLow"){

    setSort("desc");
  }
  else{
    setSort("");
  }
}





const handleCheck = (e) => {
  const value = e.target.value;
  setCheckedItems((prevItems) => {
    if (prevItems.includes(value)) {
      return prevItems.filter((item) => item !== value);
    } else {
      return [...prevItems, value];
    }
  });
};

    useEffect(()=>{

if(sort && checkedItems){
  const dietaryQuery = checkedItems.map((item) => `dietary=${item}`).join('&');
  axios.get(`https://food-yc4g.onrender.com/food?${dietaryQuery}&_sort=price&_order=${sort}`)
        .then((res)=>{
            setData(res.data)
            // let temp=res.data.map((el,i)=>{
            //   return el.dietary
            // })
            // setCat([...new Set(temp)])
        })
        .catch((err)=>{
            console.log(err);
        })
}

      else if(sort){
        axios.get(`https://food-yc4g.onrender.com/food?_sort=price&_order=${sort}`)
        .then((res)=>{
            setData(res.data)
            // let temp=res.data.map((el,i)=>{
            //   return el.dietary
            // })
            // setCat([...new Set(temp)])
        })
        .catch((err)=>{
            console.log(err);
        })
      }
else if(checkedItems){
  const dietaryQuery = checkedItems.map((item) => `dietary=${item}`).join('&');
  axios.get(`https://food-yc4g.onrender.com/food?${dietaryQuery}`)
        .then((res)=>{
            setData(res.data)
            // let temp=res.data.map((el,i)=>{
            //   return el.dietary
            // })
            // setCat([...new Set(temp)])
        })
        .catch((err)=>{
            console.log(err);
        })
}

     
      else{
        axios.get(`https://food-yc4g.onrender.com/food`)
        .then((res)=>{
            setData(res.data)
            // let temp=res.data.map((el,i)=>{
            //   return el.dietary
            // })
            // setCat([...new Set(temp)])
        })
        .catch((err)=>{
            console.log(err);
        })
      }
        
    },[sort,checkedItems])


  return (
    <Box id='menu'>
        <Heading textAlign={'center'}>Today's <Heading as={'span'} color={"#FF5722"}>Menu</Heading></Heading>


{/* for mobile view */}
<Box w={'80%'}  p={'25px'} display={['block','none','none']}>
    <Box>
        <Heading size={'sm'}>Sort By</Heading>
        
        <input type='radio' name='price' value="lowToHigh" onChange={handelsort}/>
        <label>Low to High</label>
        <br />
        
        <input type='radio' name='price' value="highToLow" onChange={handelsort}/>
        <label >High to Low</label>
    </Box>
    <Box>
        <Heading size={'sm'}>Filter By</Heading>
        
         <Box>
                  <Checkbox value='Cal' onChange={handleCheck}>Cal</Checkbox>
                </Box>
         <Box>
                  <Checkbox value='High protein' onChange={handleCheck}>High protein</Checkbox>
                </Box>
        
        
    </Box>

</Box>


<Box display={'flex'} justifyContent={'space-between'} gap={'20px'}>
<Box w={'15%'}  p={'25px'} display={['none','block','block']}>
    <Box>
        <Heading size={'sm'}>Sort By</Heading>
        
        <input type='radio' name='price' value="lowToHigh" onChange={handelsort}/>
        <label>Low to High</label>
        <br />
        
        <input type='radio' name='price' value="highToLow" onChange={handelsort}/>
        <label >High to Low</label>
    </Box>
    <Box>
        <Heading size={'sm'}>Filter By</Heading>
        
         <Box>
                  <Checkbox value='Cal' onChange={handleCheck}>Cal</Checkbox>
                </Box>
         <Box>
                  <Checkbox value='High protein' onChange={handleCheck}>High protein</Checkbox>
                </Box>
        
        
    </Box>

</Box>

<Box w={'80%'} m={'auto'} display={'grid'} gap={'20px'} gridTemplateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}>
  {data &&
    data.filter((value, index, self) => {
      return self.indexOf(value) === index}).map((el, i) => (
      <Box
        key={i}
        _hover={{ boxShadow: 'md' }}
        borderRadius={'5px'}
        p={'20px'}
        cursor={'pointer'}
        overflow="hidden"
      >
        <Img
          display={'block'}
          m={'auto'}
          src={el.imageURL}
          _hover={{ transform: 'scale(1.07)',transition:'0.5s' }} 
          borderRadius={'5px'}
        />
        <Heading size={'sm'} m={'10px 0'}>
          {el.name}
        </Heading>
        <Text size={'sm'} color={'gray'}>
          {el.description.split(' ').slice(0, 10).join(' ')}{el.description.split(' ').length > 10 ? ' ....' : ''}
        </Text>
        <Heading m={'10px 0'} size={'sm'}>₹ {el.price}</Heading>
      </Box>
    ))}
</Box>

</Box>       
    </Box>
  )
}

export default Menu
