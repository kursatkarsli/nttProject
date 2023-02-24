import Carousel from 'Components/Carousel';
import Content from 'Components/Content';
import Footer from 'Components/Footer';
import NavigationMenu from 'Components/NavigationMenu';
import React from 'react';
import Header from './Components/Header';

function App() {
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
