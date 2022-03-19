import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <Header></Header>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
