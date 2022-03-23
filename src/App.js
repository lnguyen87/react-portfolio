import React, { useState } from "react";
import ContactForm from "./components/Contact";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";

function App() {
  const [currentComponent, setCurrentComponent] = useState("about");

  return (
    <div className="bg-gray-300 text-black sm:h-screen xs:h-max font-sans">
      <Navigation
        setCurrentComponent={setCurrentComponent}
        currentComponent={currentComponent}
      ></Navigation>
      <main className="bg-gray-300">
        {currentComponent === "about" && <About />}
        {currentComponent === "contact" && <ContactForm />}
        {currentComponent === "resume" && <Resume />}
        {currentComponent === "project" && <ProjectList />}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
