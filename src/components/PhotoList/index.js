import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();
  
    const [photos] = useState([
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

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
      setCurrentPhoto({ ...image, index: i });
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <div>
        {isModalOpen && (
          <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
        )}
        <div className="flex flex-row flex-wrap">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/images/${category}/${i}.jpg`)}
              alt={image.name}
              className="h-48 w-auto mb-6 mr-6 hover:opacity-70 hover:h-52"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default PhotoList;