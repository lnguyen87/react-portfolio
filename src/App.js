import React, { useState } from 'react';
import ContactForm from './components/Contact';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';


function App() {
  const [categories] = useState([
    {
      name: 'project',
      description: 'Collection of GitHub projects',
    },
    {
      name: 'resume',
      description: 'Most recent resume',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="bg-gray-300 text-black h-screen font-sans">
      <Navigation
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        <Footer></Footer>

        {!contactSelected ? (
          <>
            <Project currentCategory={currentCategory}></Project>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
