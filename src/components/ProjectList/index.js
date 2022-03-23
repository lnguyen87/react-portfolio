import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Modal from '../Modal';

const ProjectList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();
  
    const [category] = useState(    
      {
      name: 'project',
      description: 'Collection of GitHub projects',
      },
    );

    const [projects] = useState([
      {
          name: 'Last Minute',
          category: 'project',
          description: 'Date night event planner',
          githubLink: 'https://github.com/lnguyen87/lastMinute',
          deployedLink: 'https://hone12345678.github.io/lastMinute/',
      },
      {
          name: 'Troubleshot',
          category: 'project',
          description: 'Personal database for keeping track of questions and answers',
          githubLink: 'https://github.com/lnguyen87/Troubleshot',
          deployedLink: 'https://troubleshot.herokuapp.com/',
      },
      {
          name: 'Weather Dashboard',
          category: 'project',
          description: 'Weather tracker',
          githubLink: 'https://github.com/lnguyen87/weather-dashboard',
          deployedLink: 'https://lnguyen87.github.io/weather-dashboard/',
      },
      {
          name: 'Workday Scheduler',
          category: 'project',
          description: 'Simple workday scheduler',
          githubLink: 'https://github.com/lnguyen87/work-day-scheduler',
          deployedLink: 'https://lnguyen87.github.io/work-day-scheduler/',
      },
      {
          name: 'Password Generator',
          category: 'project',
          description: 'Password generator',
          githubLink: 'https://github.com/lnguyen87/generate-password',
          deployedLink: 'https://lnguyen87.github.io/generate-password/',
      },
      {
          name: 'Code Quiz',
          category: 'project',
          description: 'Simple code quiz',
          githubLink: 'https://github.com/lnguyen87/code-quiz',
          deployedLink: 'https://lnguyen87.github.io/code-quiz/',
      }
    ]);


    const toggleModal = (project, i) => {
      setCurrentProject({ ...project, index: i });
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <section className="mt-10 ml-24 text-black">
            <h1 data-testid="h1tag" className="text-4xl mb-2 font-bold decoration-orange-400 underline">{capitalizeFirstLetter(category.name)}</h1>
            <p className="mb-2 text-2xl">{category.description}</p>
      
      <div>
        {isModalOpen && (
          <Modal onClose={toggleModal} currentProject={currentProject} />
        )}
        <div className="flex flex-row flex-wrap">
          {projects.map((project, i) => (
            <img
              src={require(`../../assets/images/${project.category}/${i}.jpg`)}
              alt={project.name}
              className="h-48 w-auto mb-6 mr-6 hover:opacity-70 hover:h-52"
              onClick={() => toggleModal(project, i)}
              key={project.name}
            />
          ))}
        </div>
      </div>
      </section>
    );
  };
  
  export default ProjectList;