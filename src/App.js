import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project'

function App() {
  return (
    <div className="bg-gray-300 text-black h-screen font-sans">
      <Navigation></Navigation>
      <main>
        <Header></Header>
        <About></About>
        <Project></Project>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
