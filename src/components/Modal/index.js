import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, githubLink, deployedLink } = currentPhoto;

  return (
    <div className="bg-black/60 bottom-0 left-0 right-0 top-0 overflow-auto fixed z-1">
      <div className="text-white m-w-full my-20 mx-auto w-1/2">
        <h3 className="text-3xl font-bold mb-4">{name} </h3>
        <img
          src={require(`../../assets/images/${category}/${index}.jpg`)}
          alt="current category"
          className="h-70 w-auto"
        />
        <p className="text-xl">{description}</p>
        <a href={githubLink} target="_blank" rel="noreferrer" className="text-xl hover:text-orange-500"><p>GitHub link</p></a>
        <a href={deployedLink} target="_blank" rel="noreferrer" className="text-xl hover:text-orange-500"><p>Deployed application</p></a>
        <button type="button" onClick={onClose} data-toggle="modal" data-dismiss="modal">
        <img alt="close icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAChklEQVRYhe3YTW8SQRwG8GeGhQxLeWl8iYr4WsvBeKU3Y6I348mjZz+DYilGAwg29dRET8bvYC8mtvElWmPiwYO3Go2KPdjUg2h2Cex4ANmlzFJmlm3U7HOcmeX/y8zsTBYgSJAgQ0PcOn6dmTlohXgZwHkAu3yqvwGQJcppQV9ZrY8M7OJeAUj7BNuaOuWhGRGSikZ3Z26ncACQtohVEnUIgegs686Gc2FNN6Bfe849BHtEzW7AvyZKQKLHQPdLbNFIRKUMAAUg0WNg+QrYjQXQzOGRxkeL84hcuuw/kESjYPkK6IksSCIFNlsFTWeG4ti1CuhUFuELF5WQUkBumrDWP9uA1CTY9XnhTJLYBFjhFuhUttcWOnlKernlltiyYN67g9azxzYkkQKbq/UhO9ugDHps2n704xqMyizQbPoIHAHpXNY+XCkP3vghXU6TfsKBBADt9DkbWbwN/n0T9NDRseDUgW7IeBIknhwbDvB6UP9Z7hdPBru+fvKMA8ZwkxAWBd13YLA9ngSZ9H5jegL2Xojj04N98STYXBU0c8RLCXWg+G19j9bLp/aYRMozUvkuHsB9WINRugpzsSY4gtSRanexCFfuvhCu56QaUu4u3g7Xa+winy/3IwtVkN17/QPyVgvcNIbjnMi7C30z2X73FnxzQwood1A3TRi1ItiVmyB6zB3nRHYPc2hhmIs1wLKkSgq/6hpnc3zoQ4wBIQ38Z2O0KpQCHAAfjptYfj3gUbrquGFsP8gZyVlz5p/9JpHbyeMIxzdRswuQLPlpEZfEQ1GzEEg5LQAQ/lfiU74QrV0QWkSN+spqndBwDiAP3KZ+LOn89n2itXOxR2/WfasTJMj/nN+3QQNalGZcWQAAAABJRU5ErkJggg=="/>
        </button>
      </div>
    </div>
  );
};

export default Modal;