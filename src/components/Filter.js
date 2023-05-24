import React, { useState } from 'react';

function Filter({ filterTitle, filterRating, handleFilterChange }) {
   
  /*  const [filterTitle, setFilterTitle] = useState('');
    const [filterRating, setFilterRating] = useState(0);
  */
const handleTitleChange = (event) => {
    const title = event.target.value;
    handleFilterChange(title, filterRating);
  };

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    handleFilterChange(filterTitle, rating);
  };

  return (
    <div>
      <h2>Filter Movies:</h2>
      <input
        type="text"
        placeholder="Filter by Title"
        value={filterTitle}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        value={filterRating}
        onChange={handleRatingChange}
      />
    </div>
  );
}
    
    
    
    
    
    /*
  const filterTitleRef = useRef();
  const filterRatingRef = useRef();

  const handleInputChange = () => {
    const title = filterTitleRef.current.value;
    const rating = filterRatingRef.current.value;
    handleFilterChange({ title, rating });
  };

  return (
    <div>
      <h2>Filter Movies:</h2>
      <input
        type="text"
        placeholder="Filter by Title"
        value={filterTitle}
        ref={filterTitleRef}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        value={filterRating}
        ref={filterRatingRef}
        onChange={handleInputChange}
      />
    </div>
  );
}*/

export default Filter;



// In the case of filtering movies, using a ref can be helpful for accessing the input values without the need for additional state variables.
//In the example provided, the filterTitleRef and filterRatingRef are used to access the input values directly when filtering movies. By using ref, you can retrieve the current value of the input elements using filterTitleRef.current.value and 
//The filterTitleRef.current.value expression is used to access the current value of the input element referenced by filterTitleRef.






//To filter movies based on title or rating, you can utilize the filter() method in JavaScript