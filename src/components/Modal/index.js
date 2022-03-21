import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/images/${category}/${index}.jpg`)}
          alt="current category"
          className="h-52 w-auto mb-6"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;