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
      },
      {
          name: 'Troubleshot',
          category: 'project',
          description: 'Personal database for keeping track of questions and answers',
      },
      {
          name: 'Weather Dashboard',
          category: 'project',
          description: 'Weather tracker',
      },
      {
          name: 'Workday Scheduler',
          category: 'project',
          description: 'Simple workday scheduler',
      },
      {
          name: 'Password Generator',
          category: 'project',
          description: 'Password generator',
      },
      {
          name: 'Code Quiz',
          category: 'project',
          description: 'Simple code quiz'
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
        <div className="flex flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/images/${category}/${i}.jpg`)}
              alt={image.name}
              className="h-32 w-auto mb-6 mr-6 hover:opacity-70 hover:h-36"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default PhotoList;