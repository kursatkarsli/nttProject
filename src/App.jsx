import Carousel from 'Components/Carousel';
import Content from 'Components/Content';
import Footer from 'Components/Footer';
import NavigationMenu from 'Components/NavigationMenu';
import { getCardData } from 'features/products/productsReducer';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Components/Header';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCardData())
    
  },[])
  return (
    <>
        <Header />
      <NavigationMenu />
      <Carousel />
      <Content />
      <Footer />
    </>
  );
}

export default App;
