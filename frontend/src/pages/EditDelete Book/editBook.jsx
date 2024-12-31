import React, {useState} from 'react';

const BookCard = () => {
    const [modal, modalDetails] = useState(null);

    const bookOpen = (item) =>{
        modalDetails(item);
      }
      const closeModal = () => {
        modalDetails(null); // Close the modal
      };

  return (
    <div className="model">
        <div className="overlay" onClick={closeModal}>
            <div className="content">
                <h2>{modal.bookName}</h2>
                <p>Author: {modal.author}</p>
                <p>Publisher: {modal.publisher}</p>
                <p>Price: {modal.price}</p>
                {/* Add more details as needed */}
                <button onClick={closeModal}>Close</button>
                </div>    
            </div>
  </div>
  );
};

export default BookCard;