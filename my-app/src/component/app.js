import React from 'react';
import Header from './ui/header/header';
import Main from './ui/main/main';
import Footer from './ui/footer/footer';


function app() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default app;
