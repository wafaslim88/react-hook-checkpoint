import React, { useState } from 'react';

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePosterURLChange = (event) => {
    setPosterURL(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseFloat(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new movie object
    const newMovie = {
      title,
      description,
      posterURL,
      rating,
    };

    // Call the addMovie function passed as a prop to add the new movie
    addMovie(newMovie);

    // Reset the input fields
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
  };

  return (
    <div>
      <h2>Add Movie:</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />

        <label>Description:</label>
        <input type="text" value={description} onChange={handleDescriptionChange} />

        <label>Poster URL:</label>
        <input type="text" value={posterURL} onChange={handlePosterURLChange} />

        <label>Rating:</label>
        <input type="number" value={rating} onChange={handleRatingChange} />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;

