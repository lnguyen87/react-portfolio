import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Project from './components/Project'

function App() {
  return (
    <div className="bg-gray-700 text-stone-300 h-screen">
      <Navigation></Navigation>
      <main>
        <Header></Header>
        <Project></Project>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
