import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';
import Banner from './components/Banner';
import Contactus from './components/Contactus';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Box >
      <Navbar/>
      <Banner/>
      <Menu/>
      <Testimonials/>
      <Contactus/>
    </Box>
  );
}

export default App;
